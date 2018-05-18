export const STORAGE_KEY = 'userInfo';
let syncedData={//根据项目的添加来添加
  userName:null,
  accessToken:null
}
const notSyncedData = {};

// 与 local storage 同步.
if (localStorage.getItem(STORAGE_KEY)) {
  syncedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (syncedData) {
    syncedData = syncedData.auth
  }
}

const state = Object.assign(syncedData, notSyncedData);
const mutations ={
  'UPDATE_AUTH': (state, auth) => {//初始化获取
    state.userName=auth.userName,
      state.accessToken=auth.accessToken
  },
  'UPDATE_USER_INFO': (state, userInfo) => {//更新
    state.userName = userInfo.userName;
  },
  'WEB_ALL_DATA':(state,auth)=>{//删除localStorage
      state.userName=auth.userName,
      state.accessToken=auth.accessToken
  }
};
const actions={};
export  default {
  state,
  mutations,
  actions
}
