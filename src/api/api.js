import axios from 'axios'
import router from '../router'
import store from '../store'
import { Message } from 'element-ui'
import {isAuthenticated} from '../util/auth'//缓存token
import {
  API_ROOT,
  ACCESS_TOKEN_EXPIRE_CODE,
  WATING_TIME_BEFORE_REDIRECT,
  PROCESS_OK_CODE,
  DEFAULT_NETWORK_TIMEOUT,
  ACCESS_TOKEN_INVAILD_CODE
} from '../util/config'

const api = axios.create({
  baseURL: API_ROOT,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: DEFAULT_NETWORK_TIMEOUT
});
/**
 * @var{string} LOGIN_URL 用户登录地址
 */
const LOGIN_URL = 'login'
export  default {


  /*
   * 请求设置 Token
   * @param {Object} request 为请求实例设置验证 Token
   * @return {void}
   */
  setAuthHeader(request) {
    let accessToken = 'API_token';//实际应该是stor获取//目前是假的
    if (!isAuthenticated(accessToken)) {
      this._clearOut()
    }
    request.setHeader('Authorization', 'Bearer ' + accessToken)
  },
  /**
   * 用户登陆
   *
   * @param {string} username 用户名
   * @param {string} password 密码
   * @param {string|null} redirect 重定向路由名称
   * @param {string|null} inviteid 邀请UUID
   * @return {Promise}
   */
  login(endUrl, method = 'post', data = {}, auth = true) {
    return api[method.toLowerCase()](endUrl,data)
      .then((response) => {
        if (response.status == PROCESS_OK_CODE) {
          let userData={
            accessToken:response.data.accessToken,
            userName:response.data.data[0].userName
          }
          store.commit('UPDATE_AUTH',userData);
          router.push({name: 'charts'});
          return response
        }
      }).catch((response) => {
        console.log(response)
      })
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
  makeRequestApi(endUrl, method = 'get', data = {}, auth = true){
    return api[method.toLowerCase()](endUrl, data)
      .then((response) => {
            let processCode = response.status;
            if (processCode !== PROCESS_OK_CODE) {
              Message({
                message: response.data.message,
                type: 'error',
                duration: 5 * 1000
              })
            } else {
              Message({
                message: response.data.message,
                type: 'success',
                duration: 2000
              })
              return response
            }
      })
      .catch((error) => {
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
      })
  },

  makeRequest(endUrl, method = 'get', data = {}, auth = true) {
    // if (auth) {
    //   this.setAuthHeader(api)
    // }
    return api[method.toLowerCase()](endUrl, data)
      .then((response) => {
        if (response.ok === true) {
          // 检查业务情况
          let processCode = response.data.code;
          // if (processCode !== PROCESS_OK_CODE) {
          //   if (auth === true && this._isInvalidToken(response)) {
          //     // 因为 access_token 过期或其他原因导致的失败，刷新 token
          //     return this._refreshToken().then((response) => {
          //       return this.makeRequest(endUrl, method = 'get', data = {}, auth = true)
          //     })
          //   } else {
          //     return response
          //   }
          // } else {
          //   return response
          // }
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
            Message({
              message: error.message,
              type: 'error',
              duration: 5 * 1000
            })
            return response
          }
        }
      })
      .catch((error) => {
        Message({
          message: error.message,
          type: 'error',
          duration: 5 * 1000
        })
      })
  },
  // 暴露 axios 实例供测试和手动构造请求
  axiosInstance: api.axiosInstance,
  store: store

}
