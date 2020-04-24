export default (query, signal) => {
	const url = process.env.REACT_APP_URL + query;
	const params = {
		method: 'GET',
		signal,
	};
	return fetch(url, params).then((data) => data.json());
};
