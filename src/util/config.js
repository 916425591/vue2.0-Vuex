export  const  API_ROOT =(process.env.NODE_ENV ==='home')? '': '';//测试网址
export  const  SOCKET_IO_ROOT = (process.env.NODE_ENV==='home')? '': ''; //实际网址
//前端服务器地址
export  const  WEB_HOST=(process.env.NODE_ENV ==='home')?'webDise':''
// 服务器端业务正常码（非http status code）
export const DEFAULT_NETWORK_TIMEOUT = 30000;
// 服务器端业务正常码（非http status code）
export const PROCESS_OK_CODE = 200;
//access_token 未识别
export  const ACCESS_TOKEN_INVAILD_CODE =10005
//access_token 过期
export  const ACCESS_TOKEN_EXPIRE_CODE =10002
//host前端请求服务地址
export const HOST='http://web.cs'
