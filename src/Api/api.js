const END_POINT_URL = 'http://localhost:3000/';

export const userAuth = (options) => {
	const url = END_POINT_URL+'user/getUser';
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

export const friendList = (options) => {
	const url = END_POINT_URL+'friend/friendList';
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
	const url = END_POINT_URL+'game/gameRequest';
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

export const notifications = (options) => {
	const url = END_POINT_URL+'notification/'
}
