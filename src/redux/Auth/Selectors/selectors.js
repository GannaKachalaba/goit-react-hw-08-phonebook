export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectName = state => state.auth.user.name;

export const selectEmail = state => state.auth.user.email;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectName,
  selectEmail,
};

export default authSelectors;
