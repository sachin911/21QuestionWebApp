import * as env from '../../constants/env';
import * as endpoints from '../../constants/endPoints';
import serviceManager from '../../utils/serviceManager';

export const loadDashboard = (userId) => {
	const url = env.END_POINT_URL + endpoints.LOAD_DASHBOARD + '?userId=' + userId;
	return serviceManager.getMethod(url);
}
