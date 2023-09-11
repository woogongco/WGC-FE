import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://ec2-3-34-198-19.ap-northeast-2.compute.amazonaws.com';
const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getPosts: builder.query({
			query: () => '/post?limit=6',
		}),
	}),
});

export const { useGetPostsQuery } = api;
export default api;
