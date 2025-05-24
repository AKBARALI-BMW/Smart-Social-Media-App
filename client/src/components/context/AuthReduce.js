export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        user: null,
        isFetching: true,
        error: false,
        errorMessage: ""
      };
        
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
        errorMessage: ""
      };
        
    case "LOGIN_FAILURE":
      return {
        ...state,
        user: null,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
        
    case "REGISTER_START":
      return {
        ...state,
        isFetching: true,
        error: false,
        errorMessage: ""
      };
        
    case "REGISTER_SUCCESS":
      return {
        ...state,
        isFetching: false,
        error: false,
        errorMessage: ""
      };
        
    case "REGISTER_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
        errorMessage: action.payload
      };
        
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
        errorMessage: ""
      };
        
    case "CLEAR_ERROR":
      return {
        ...state,
        error: false,
        errorMessage: ""
      };
        
    default:
      return state;
  }
};