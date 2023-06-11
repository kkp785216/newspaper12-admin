const REFRESH_TOKEN_COOKIE_VAR_NAME = "refreshToken";

/**
 * this function is used to set cookie into document.cookie store
 * @param cname name of the new cooke
 * @param cvalue value of the new cookie
 * @param expiry expiry time in miliseconds
 */
function setCookie(cname: string, cvalue: string, expiry: number) {
  const d = new Date();
  d.setTime(d.getTime() + expiry);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

/**
 * this function is used to get a single cookie by its name
 * @param cname name of the existing cookie
 * @returns cookie value
 */
function getCookie(cname: string) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

/**
 * this function is used to delete existing cookie by it's name
 * @param cname name of the existing cookie
 */
function deleteCookie(cname: string) {
  document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export { setCookie, getCookie, deleteCookie, REFRESH_TOKEN_COOKIE_VAR_NAME };
