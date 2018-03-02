import * as types from '../../constants/actionTypes';

export const getNotification = (userId) => {
	return {
		type: types.LOAD_NOTIFICATION,
		userId: userId
	}
}
