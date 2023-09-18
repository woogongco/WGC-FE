import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostList from 'components/postList/PostList';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
	const [url, seturl] = useState('');
	const [isLoading, setLoading] = useState(false);
	const urltype = {
		free: '자유게시판',
		itnews: 'IT뉴스',
		job: '취업게시판',
		project: '프로젝트',
		study: '스터디',
		popular: '인기글',
	};
	useEffect(() => {
		seturl(window.location.pathname.split('/')[2]);
		setLoading(true);
	}, [urltype[url]]);

	return (
		<div>
			{isLoading ? (
				<Wrapper>
					<BoardHeader>
						<h2>{urltype[url]}</h2>
						<Link to="/write">
							<FaPen />
							작성하기
						</Link>
					</BoardHeader>
					<PostList />
				</Wrapper>
			) : (
				''
			)}
		</div>
	);
}
