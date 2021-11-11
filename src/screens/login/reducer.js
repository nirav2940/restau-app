const INITIAL_STATE = {
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_ATTEMPT':
      return {
        ...state,
        isLoading: true,
      };
      break;
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
      };
      break;
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoading: false,
      };
      break;
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
      break;
    default:
      return state;
  }
};

export default LoginReducer;
