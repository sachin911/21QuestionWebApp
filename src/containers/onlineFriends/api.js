import * as env from '../../constants/env';

export const friendList = (options) => {
	const url = env.END_POINT_URL+'friend/friendList';
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

export const gameRequest = (options) => {
	const url = env.END_POINT_URL+'game/gameRequest';
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
