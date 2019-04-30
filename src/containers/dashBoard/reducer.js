import * as types from '../../constants/actionTypes';

const initialState = {
  // user: {
	// 	win: 0,
	// 	loss: 0,
	// 	email: "initial@state.com",
	// 	name: "Initial Name",
	// 	id: 2
	// }
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
          pause: true
      };
    case types.LOGIN_SUCCESS:
			return {...state, user: action.user};
		case types.LOAD_DASHBOARD_SUCCESS:
			return {...state, user: action.user};
    default: return state;
  }
}
