import Cookie from 'js-cookie';

const setCookie = (cookiename, usrin) => {
  Cookie.set(cookiename, usrin, { 
    expires: 1, // 1 days
    secure: true, 
    sameSite: 'strict',
    path: '/',
  });
}

export default setCookie;