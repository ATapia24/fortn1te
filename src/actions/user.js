import fire from "../config/firebase";

export const fetchUser = () => dispatch => {
  fire.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch({
        type: "AUTH_USER",
        payload: user
      });
    } else {
      dispatch({
        type: "AUTH_USER",
        payload: null
      });
    }
  });
};

export const logout = () => dispatch => {
  fire
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: "AUTH_USER",
        payload: null
      });
    });
};
