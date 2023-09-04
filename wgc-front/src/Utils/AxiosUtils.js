const axios = require('axios');
const defaultHeaders = {
	headers: {
		'Content-Type': 'application/json',
	},
};

exports.axiosGet = async (url, headers = defaultHeaders) => {
	await validation(url, 'URL is not presented !');

	const res = axios.get(url, headers);

	return res.data;
};

exports.axiosPost = async (url, body, headers = defaultHeaders) => {
	const objects = [
		{
			obj: url,
			message: 'URL is not presented !',
		},
		{
			obj: body,
			message: 'Request Body is not presented !',
		},
	];

	for (const data of objects) {
		const { obj, message } = data;
		await validation(obj, message);
	}

	const res = axios.post(url, body, headers);

	return res.data;
};

const validation = async (object, message = 'axios cause error !') => {
	if (!object) throw new Error(message);
};
