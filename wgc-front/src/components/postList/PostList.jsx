import React from 'react';
import styled from 'styled-components';
import Post from 'components/post/Post';

const Wrapper = styled.section`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 230px);
	gap: 68px 20px;
	justify-content: center;
`;

export default function PostList() {
	return (
		<Wrapper>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</Wrapper>
	);
}
