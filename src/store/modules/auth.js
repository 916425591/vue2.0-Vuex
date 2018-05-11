export const STORAGE_KEY = 'user_pass';
let syncedData={//根据项目的添加来添加
  isLoggedIn:false,
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
  'UPDATE_AUTH': (state, auth) => {//初始化
    state.isLoggedIn = auth.isLoggedIn;
    state.accessToken = auth.accessToken;
  },
  'UPDATE_USER_INFO': (state, userInfo) => {
    state.userName = userInfo.userName;
  },
  'WEB_ALL_DATA':(state)=>{
      state.isLoggedIn=false,
      state.userName=null,
      state.accessToken=null
  }
};
const actions={};
export  default {
  state,
  mutations,
  actions
}
