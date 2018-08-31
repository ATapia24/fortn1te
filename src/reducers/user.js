let initialState = {
  fetched: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "AUTH_USER":
      return { ...state, user: action.payload, fetched: true };
    default:
      return state;
  }
  return state;
}
