// const getIsAuthenticated = state => Boolean(state.auth.token);

const getIsLoggedIn = state => state.auth.isLogin;

const getUsername = state => state.auth.user.name;

export default {

  getUsername,
  getIsLoggedIn
};