import * as types from '../../constants/actionTypes';

export const loadDashboard = (userId) => {
	return {
		type: types.LOAD_DASHBOARD,
		userId: userId
	}
}
