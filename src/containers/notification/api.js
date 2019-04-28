import * as env from '../../constants/env';
import * as endpoints from '../../constants/endPoints';
import serviceManager from '../../utils/serviceManager';

export const getNotifications = (options) => {
	const url = env.END_POINT_URL+'notification/fetchNotifications'
	return serviceManager.postMethod(url, options);
}

export const loadGameData = (gameId) => {
	const url = env.END_POINT_URL + endpoints.JOIN_GAME + '?gameId=' + gameId;
	return serviceManager.getMethod(url);
}
