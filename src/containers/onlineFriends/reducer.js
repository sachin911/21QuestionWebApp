import * as types from '../../constants/actionTypes';

const initialState = {
  user: {}
};


export default function (state=initialState, action={}) {
  switch (action.type) {
    case types.LOAD_FRIENDS:
      return { ...state, isFetching: true, errors: "" };
		case types.LOAD_FRIENDS_FAILED:
			return {
					...state,
					isFetching: false,
					errors: action.message,
					pause: true,
					errorCode: "action.type"
			};
		case types.LOAD_FRIENDS_SUCCESS:
			return {
				...state,
				friends: action.friends,
				user: action.user
			};
		default: return state;
  }
}
