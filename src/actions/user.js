import fire from "../config/firebase";
import axios from "axios";

//if user is logged in, fetches user and puts in redux store. otherwize, null
export const dispatchUser = user => dispatch => {
  //if user, grab more details on user based on UID
  dispatch({
    type: "FETCH_USER_PENDING",
    payload: null
  });
  dispatch({
    type: "FETCH_USER_SUCCESS",
    payload: user ? user : null
  });
};

export const fetchInitialUser = () => dispatch => {
  fire.auth().onAuthStateChanged(function(user) {
    if (user) {
      axios
        .post("http://localhost:3001/signin", {
          uid: user.uid
        })
        .then(userData => {
          dispatch(dispatchUser({ ...user, ...userData.data }));
        });
    } else {
      dispatch(dispatchUser(null));
    }
  });
};

export const logout = () => dispatch => {
  dispatch({
    type: "LOGOUT_USER_PENDING",
    payload: null
  });
  fire.auth().signOut();
};

export const handleLogin = (email, password) => dispatch => {
  fire.auth().signInWithEmailAndPassword(email, password);
};

export const handleSignup = (
  email,
  password,
  username,
  fortniteUsername
) => dispatch => {
  fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      //after creating user, we access that user immediately by the currentUser
      const user = fire.auth().currentUser;
      if (user) {
        axios.post("http://localhost:3001/signup", {
          uid: user.uid,
          fortniteUsername: fortniteUsername,
          displayName: username
        });
      }
    })
    .catch(error => {
      console.log("error", error);
    });
};
