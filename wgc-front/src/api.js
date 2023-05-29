import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://ec2-54-180-120-146.ap-northeast-2.compute.amazonaws.com';
const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getPosts: builder.query({
			query: () => '/post',
		}),
	}),
});

export const { useGetPostsQuery } = api;
export default api;
