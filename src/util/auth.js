export function isAuthenticated(token, checkExpire = false) { //身份验证具体是token 有大佬是只存token
  if (token) {  // Token is present
    if (token.split('.').length === 3) {  // Token with a valid JWT format XXX.YYY.ZZZ
      try { // Could be a valid JWT or an access token with the same format
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        const exp = JSON.parse(window.atob(base64)).exp
        if (typeof exp === 'number') {  // JWT with an optonal expiration claims
          if (checkExpire) {
            return Math.round(new Date().getTime() / 1000) < exp
          }
        }
      } catch (e) {
        return true  // Pass: Non-JWT token that looks like JWT
      }
    }
    return true  // Pass: All other tokens
  }
  return false
}
