const serviceManager = {};

serviceManager.getMethod = (url) => {
	return fetch(url, {
		method: 'GET',
	 	headers: {
		 'Content-Type': 'application/json'
	 	}
  }).then(response => {
		return response.json();
	}).then(data => {
		return data;
	})
}

serviceManager.postMethod = (url, payLoad) => {
	return fetch(url, {
		method: 'POST',
	 	headers: {
		 'Content-Type': 'application/json'
	 	},
	 	body: JSON.stringify(payLoad)
  }).then(response => {
		return response.json();
	}).then(data => {
		return data;
	})
}

export default serviceManager;
