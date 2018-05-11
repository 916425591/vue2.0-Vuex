import {cretae} from 'apisauce' //共有处理异步跨域的请求 不懂请移步百度
import  router from '../router'
import store from '../store'
import {
  API_ROOT,
  DEFAULT_NETWORK_TIMEOUT,
  PROCESS_OK_CODE,
  ACCESS_TOKEN_INVAILD_CODE,
  ACCESS_TOKEN_EXPIRE_CODE
} from '../util/config'


// https://github.com/infinitered/apisauce
const api = create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: DEFAULT_NETWORK_TIMEOUT
});

// 非生产环境添加请求监视器便于在console 中查看请求信息
const naviMonitor = (response) => console.log('响应如下： ', response);
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'testing') {
  api.addMonitor(naviMonitor);
  console.log(process.env)
}

import {isAuthenticated} from '../util/auth' //全局校验 token
const SNS_LOGIN_URL = 'login/social'; //login登陆的全局接口

export default { //抛出这些全局方法
  /**
   * 挂载到 Vue 对象，全局使用
   * @param {Object} Vue 全局对象 Vue.
   * @param {Object} options 插件配置.
   * @return {void}
   */
  install(Vue, options) {
    Vue.prototype.$Api = Vue.Api = this
  },
  /**
   * 通用请求
   *
   * @param {string} endUrl 端地址
   * @param {string} method HTTP 方法
   * @param {object} data 请求数据
   * @param {boolean} auth 使用token 授权
   * @return {void|Promise}
   */
  makeRequest(endUrl, method = 'get', data = {}, auth = true) {
    if (auth) {
      this.setAuthHeader(api)
    }
    return api[method.toLowerCase()](endUrl, data)
      .then((response) => {
        if (response.ok === true) {
          // 检查业务情况
          let processCode = response.data.code;
          if (processCode !== PROCESS_OK_CODE) {
            if (auth === true && this._isInvalidToken(response)) {
              // 因为 access_token 过期或其他原因导致的失败，刷新 token
              return this._refreshToken().then((response) => {
                return this.makeRequest(endUrl, method = 'get', data = {}, auth = true)
              })
            } else {
              return response
            }
          } else {
            return response
          }
        } else {
          if (response.data) {
            let processCode = response.data.code;
            if (processCode !== PROCESS_OK_CODE) {
              if (auth === true && this._isInvalidToken(response)) {
                // 因为 access_token 过期或其他原因导致的失败，刷新 token
                return this._refreshToken().then((response) => {
                  return this.makeRequest(endUrl, method = 'get', data = {}, auth = true)
                })
              } else {
                return response
              }
            } else {
              return response
            }
          } else {
            response.data = {
              'msg': response.problem
            };
            console.log(response);
            return response
          }
        }
      })
      .catch((errorResponse) => {
        console.log(errorResponse)
      })
  },
  /**
   * 为请求设置 Token
   *
   * @param {Object} request 为请求实例设置验证 Token
   * @return {void}
   */
  setAuthHeader(request) {
    let accessToken = store.state.auth.accessToken;
    if (!isAuthenticated(accessToken)) {
      this._clearOut()
    }
    request.setHeader('Authorization', 'Bearer ' + accessToken)
  },
  /**
   * 检查 token 有效性
   *
   * @private
   * @param {Object} response 服务器返回值
   * @return {boolean}
   */
  _isInvalidToken(response) {
    const processCode = response.data.code;
    return (processCode === ACCESS_TOKEN_EXPIRE_CODE)
  },
  /**
   * 用户登陆
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   * @param {string|null} redirect 重定向路由名称
   * @return {Promise}
   */
  login(username, password, redirect, inviteid = null) {
    return api.post(LOGIN_URL,
      {
        'username': username,
        'password': password,
        'inviteUUID': inviteid
      })
      .then((response) => {
        if (response.ok) {
          // 检查业务情况
          let processCode = response.data.code;
          if (processCode !== PROCESS_OK_CODE) {
            store.commit('WEB_ALL_DATA');
            return response
          } else {
            this._storeToken(response);
            if (redirect) {
              setTimeout(() => {
                router.push({name: redirect})
              }, WATING_TIME_BEFORE_REDIRECT)
            }
            return response
          }
        } else {
          store.commit('WEB_ALL_DATA');
          if (!response.data) {
            response.data = {
              'msg': response.problem
            }
          }
          return response
        }
      })
      .catch((response) => {
        console.log(response)
      })
  },
  /**
   * 用户登出
   *
   * 用户登出，清除所有本地授权数据，重定向至登陆
   *
   * @return {void|Promise}
   */
  logout() {
    this.setAuthHeader(api);
    return api.get(LOGOUT_URL)
      .then((response) => {
        if (response.ok) {
          store.commit('WEB_ALL_DATA');
          router.push({name: 'login'});
          return response
        } else {
          store.commit('WEB_ALL_DATA');
          router.push({name: 'login'});
          return response
        }
      })
      .catch((errorResponse) => {
        console.log(errorResponse)
      })
  },
  /**
   * 获取当前用户信息
   * @return {void|Promise}
   */

  getUserInfo() {
    this.setAuthHeader(api);
    return api.get(USER_INFO_URL)
      .then((response) => {
        if (response.ok === true) {
          // 检查业务情况
          // store.commit('SET_LASTGROUPUUID',response.data.data.lastGroupUUID)
          store.commit('UPDATE_INFORM', response.data.data.inform);
          let processCode = response.data.code;
          if (processCode !== PROCESS_OK_CODE) {
            if (this._isInvalidToken(response)) {
              // 因为 access_token 过期或其他原因导致的失败，刷新 token
              return this._refreshToken().then((response) => {
                return this.getUserInfo()
              })
            } else {
              this._clearOut();
              return response
            }
          } else {
            this._updateUserInfo(response);
            return response
          }
        } else {
          let processCode = response.data.code;
          if (processCode !== PROCESS_OK_CODE) {
            if (this._isInvalidToken(response)) {
              // 因为 access_token 过期或其他原因导致的失败，刷新 token
              return this._refreshToken().then((response) => {
                return this.getUserInfo()
              })
            } else {
              this._clearOut();
              return response
            }
          } else {
            return response
          }
          // this._clearOut()
        }
      })
      .catch((errorResponse) => {
        console.log(errorResponse)
      })
  },
  // 暴露 axios 实例供测试和手动构造请求
  axiosInstance: api.axiosInstance,
  store: store
}

