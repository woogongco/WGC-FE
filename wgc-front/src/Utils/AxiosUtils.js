import axios from 'axios';

const ENDPOINT = process.env.REACT_APP_ENDPOINT;
const defaultHeaders = {
	headers: {
		'Content-Type': 'application/json',
	},
};
const formDataHeaders = {
	headers: {
		'Content-Type': 'multipart/form-data',
	},
};
export const axiosHealthCheck = async () => {
	const res = await axios.get(ENDPOINT);
	return res.data;
};

const headerConfiguration = header => {
	const config = { ...header };
	const token = localStorage.getItem('token');
	if (token) config.headers.Authorization = 'Bearer ' + token;

	return { ...config };
};

export const axiosGet = async (url, headers = defaultHeaders) => {
	await validation(url, 'URL is not presented !');
	const res = await axios.get(ENDPOINT + url, headerConfiguration(headers));

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

	const res = await axios.post(ENDPOINT + url, body, headerConfiguration(headers));

	return res.data;
};

const validation = async (object, message = 'axios cause error !') => {
	if (!object) throw new Error(message);
};
export const formDataPost = async (url, body) => {
	const res = await axios.post(ENDPOINT + url, body, headerConfiguration(formDataHeaders));
	return res.data;
};
export const axiosDelete = async (url, headers = defaultHeaders) => {
	const res = await axios.delete(ENDPOINT + url, headerConfiguration(headers));
	return res;
};
