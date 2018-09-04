let initialState = {
  fetched: false,
  err: null
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_PENDING":
      return state;
    case "FETCH_USER_SUCCESS":
      return { ...state, user: action.payload, fetched: true };
    case "FETCH_USER_ERROR":
      return { ...state, err: action.payload, fetched: true };
    case "LOGOUT_USER_PENDING":
      return state;
    case "LOGOUT_USER_SUCCESS":
      return { ...state, user: action.payload, fetched: true };
    default:
      return state;
  }
}
