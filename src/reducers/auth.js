const authState = {};
const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        userId: action.userId,
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
