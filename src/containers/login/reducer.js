import * as types from '../../constants/actionTypes';

const initialState = {
  isFetching: false,
  email: "",
  password: "",
  pause: false,
  errors: ""
};


export default function (state=initialState, action={}) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isFetching: true, errors: "" };
    case types.LOGIN_FAILED:
      return {
          ...state,
          isFetching: false,
          errors: action.message,
          pause: true,
					errorCode: action.type
      };
    case types.LOGIN_SUCCESS:
			return {...state, user: action.user};
    default: return state;
  }
}
