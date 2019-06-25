import { USER_LOGIN, USER_LOGIN_FAILURE } from '../actions/user-login'

const initialState = {
    userProfile: {
      isUserLoggedIn: false,
      jwtToken: null,
    },
    error: {
      isErrorOccurred: false,
      errorMessage: 'Login Failed',
    }
};

export default function (state = initialState, action: any) {
  console.log('Dispatched');
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userProfile: {
          jwtToken: action.payload.token,
          isUserLoggedIn: action.payload.token ? true : false,
        }
      };
    case USER_LOGIN_FAILURE:
      console.log('Login Failure');
      return {
        ...state,
        error: {
          isErrorOccurred: true,
          errorMessage: action.payload.message
        },
        userProfile: {
          jwtToken: null,
          isUserLoggedIn: false,
        }
      };
    default:
      return state;
    }
}