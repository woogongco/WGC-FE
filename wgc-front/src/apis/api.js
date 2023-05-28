import axios from 'axios';

async function getFriendQuerStringText(page) {
	try {
		const response = await axios.get(`/friends/list?_page=${page}`);
		const data = await response.data;
		return data;
	} catch (e) {
		throw e;
	}
}

export { getFriendQuerStringText };
