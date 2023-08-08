import React, { useState } from 'react';
import styled from 'styled-components';
import Post from 'components/post/Post';
import { useGetPostsQuery } from '../../api';

const Wrapper = styled.section`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 230px);
	gap: 68px 20px;
	justify-content: center;
`;

export default function PostList() {
	const { data, isLoading, isError } = useGetPostsQuery();
	const url = window.location.pathname.split('/')[2];
	if (isLoading) {
		return <div>불러오는 중...</div>;
	}
	if (isError) {
		return <div>에러</div>;
	}
	return (
		<div>
			{isLoading === false ? (
				<Wrapper>
					{data.data[url].map((post, index) => {
						return (
							<Post
								key={index}
								title={post.title}
								content={post.content}
								like={post.like}
								view={post.view}
							/>
						);
					})}
				</Wrapper>
			) : (
				''
			)}
		</div>
	);
}
