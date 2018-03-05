import * as types from '../../constants/actionTypes';

const initialState = {
};


export default function (state=initialState, action={}) {
  switch (action.type) {
    case types.LOAD_NOTIFICATION:
      return { ...state, isFetching: true, errors: "" };
		case types.LOAD_NOTIFICATION_FAILED:
			return {
					...state,
					isFetching: false,
					errors: action.message,
					pause: true,
					errorCode: action.type
			};
		case types.LOAD_NOTIFICATION_SUCCESS:
			return {...state, notifications: action.notifications, user: action.user};
		default: return state;
  }
}
