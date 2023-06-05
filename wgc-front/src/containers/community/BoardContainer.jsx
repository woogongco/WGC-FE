import React from 'react';
import styled from 'styled-components';
import PostList from 'components/postList/PostList';
import { FaPen } from 'react-icons/fa';

const Wrapper = styled.div`
	padding: 68px 56px 60px 60px;
	color: #fff;

	/* css 초기화 */
	& h2 {
		margin: 0;
		padding: 0;
	}

	& a {
		text-decoration: none;
		color: inherit;
		font-family: inherit;
	}
`;

const BoardHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 38px;

	& h2 {
		font-size: 24px;
	}

	& a {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5px;
		padding: 8px 14px;
		background-color: #fa9199;
		border-radius: 5px;
		font-weight: bold;
	}
`;

export default function BoardContainer() {
	return (
		<Wrapper>
			<BoardHeader>
				<h2>자유게시판</h2>
				<a href="#">
					<FaPen />
					작성하기
				</a>
			</BoardHeader>
			<PostList />
		</Wrapper>
	);
}
