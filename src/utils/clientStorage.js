const clientStorage = {};

clientStorage.inject = (key, value) => {
	console.log("in inject function>>>");
	sessionStorage.setItem(key, value);
}

clientStorage.extract = (key) => {
	return sessionStorage.getItem(key);
}

clientStorage.removeKey = (key) => {
	sessionStorage.removeItem(key);
}

export default clientStorage;
