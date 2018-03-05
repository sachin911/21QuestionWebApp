import * as env from '../../constants/env';

export const getNotifications = (options) => {
	const url = env.END_POINT_URL+'notification/fetchNotifications'
	return fetch(url, {
		method: 'POST',
	 	headers: {
		 'Content-Type': 'application/json'
	 	},
	 	body: JSON.stringify(options)
  }).then(response => {
		return response.json();
	}).then(data => {
		return data;
	})
}
