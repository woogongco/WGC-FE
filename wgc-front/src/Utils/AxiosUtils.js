import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const defaultHeaders = {
	headers: {
		'Content-Type': 'application/json',
	},
};

export const axiosHealthCheck = async () => {
	const res = await axios.get(ENDPOINT);
	return res.data;
};

export const axiosGet = async (url, headers = defaultHeaders) => {
	await validation(url, 'URL is not presented !');

	const res = await axios.get(ENDPOINT + url, headers);

	return res.data;
};

export const axiosPost = async (url, body, headers = defaultHeaders) => {
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

	const res = await axios.post(ENDPOINT + url, body, headers);

	return res.data;
};

const validation = async (object, message = 'axios cause error !') => {
	if (!object) throw new Error(message);
};
