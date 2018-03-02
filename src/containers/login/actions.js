import * as types from '../../constants/actionTypes';

export const loginAction = ({ email, password }) => {
	return {
	  type: types.LOGIN_REQUEST,
	  email,
		password
	}
};
