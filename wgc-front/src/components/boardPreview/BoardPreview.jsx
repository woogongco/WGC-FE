import React, { useCallback } from 'react';
import { useGetPostsQuery } from '../../api';
import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BoardWrapper = styled.section`
	display: flex;
	flex-direction: column;
	border: 1px solid #2e2e2e;
	border-radius: 20px;
	overflow: hidden;
	min-height: 272px;
`;

const BoardTitle = styled.header`
	padding: 12px 13px 10px 13px;
	background-color: #2e2e2e;

	& h2 {
		margin: 0;
		font-size: 1rem;
	}
`;

const BoardContents = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const ContentsItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	padding: 10px 13px;
	font-size: 0.8rem;

	&:not(:nth-child(6)) {
		border-bottom: 1px solid #2e2e2e;
	}
`;

const ContentsTitle = styled.h3`
	margin: 0;
	font-size: inherit;
	font-weight: initial;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const ContentsDetails = styled.div`
	flex-shrink: 0;
	display: flex;
	gap: 10px;

	& span {
		font-size: inherit;
	}
`;

const LikeCount = styled.span`
	display: flex;
	align-items: center;

	& span {
		margin-left: 5px;
	}
`;

const CommentCount = styled.span`
	display: flex;
	align-items: center;

	& span {
		margin-left: 5px;
	}
`;

export default function BoardPreview() {
	const { data, isLoading, isError } = useGetPostsQuery();
	const navigate = useNavigate();
	const HandleNavigate = useCallback(
		e => {
			navigate(`/board/${e}`);
		},
		[navigate],
	);
	if (isLoading) {
		return <div>불러오는 중...</div>;
	}

	if (isError) {
		return <div>에러</div>;
	}
	return (
		<>
			<BoardWrapper>
				{/* TODO: 타이틀 클릭 시 해당 게시판으로 이동 */}
				{/* TODO: 게시글 클릭 시 해당 게시글로 이동 */}
				<BoardTitle>
					<h2>자유게시판</h2>
				</BoardTitle>
				{/* -- 게시글 리스트: 6개의 게시글만 보여주기 -- */}
				<BoardContents>
					{data.data.free.map(post => (
						<ContentsItem key={post.id} onClick={e => HandleNavigate(post.id)}>
							<ContentsTitle>{post.title}</ContentsTitle>
							<ContentsDetails>
								<LikeCount>
									<FaRegThumbsUp />
									<span>{post.like}</span>
								</LikeCount>
								<CommentCount>
									<FaRegCommentDots />
									<span>{post.view}</span>
								</CommentCount>
							</ContentsDetails>
							{/*<p>{post.content}</p>*/}
							{/*<p>{post.registerDate}</p>*/}
							{/*<p>{post.lastModifiedDate}</p>*/}
						</ContentsItem>
					))}
				</BoardContents>
			</BoardWrapper>

			<BoardWrapper>
				<BoardTitle>
					<h2>취업 게시판</h2>
				</BoardTitle>
				<BoardContents>
					{data.data.job.map(post => (
						<ContentsItem key={post.id} onClick={e => HandleNavigate(post.id)}>
							<ContentsTitle>{post.title}</ContentsTitle>
							<ContentsDetails>
								<LikeCount>
									<FaRegThumbsUp />
									<span>{post.like}</span>
								</LikeCount>
								<CommentCount>
									<FaRegCommentDots />
									<span>{post.view}</span>
								</CommentCount>
							</ContentsDetails>
							{/*<p>{post.content}</p>*/}
							{/*<p>{post.registerDate}</p>*/}
							{/*<p>{post.lastModifiedDate}</p>*/}
						</ContentsItem>
					))}
				</BoardContents>
			</BoardWrapper>
			<BoardWrapper>
				<BoardTitle>
					<h2>IT 뉴스</h2>
				</BoardTitle>
				<BoardContents>
					{data.data.itnews.map(post => (
						<ContentsItem key={post.id} onClick={e => HandleNavigate(post.id)}>
							<ContentsTitle>{post.title}</ContentsTitle>
							<ContentsDetails>
								<LikeCount>
									<FaRegThumbsUp />
									<span>{post.like}</span>
								</LikeCount>
								<CommentCount>
									<FaRegCommentDots />
									<span>{post.view}</span>
								</CommentCount>
							</ContentsDetails>
							{/*<p>{post.content}</p>*/}
							{/*<p>{post.registerDate}</p>*/}
							{/*<p>{post.lastModifiedDate}</p>*/}
						</ContentsItem>
					))}
				</BoardContents>
			</BoardWrapper>

			<BoardWrapper>
				<BoardTitle>
					<h2>스터디 게시판</h2>
				</BoardTitle>
				<BoardContents>
					{data.data.study.map(post => (
						<ContentsItem key={post.id} onClick={e => HandleNavigate(post.id)}>
							<ContentsTitle>{post.title}</ContentsTitle>
							<ContentsDetails>
								<LikeCount>
									<FaRegThumbsUp />
									<span>{post.like}</span>
								</LikeCount>
								<CommentCount>
									<FaRegCommentDots />
									<span>{post.view}</span>
								</CommentCount>
							</ContentsDetails>
							{/*<p>{post.content}</p>*/}
							{/*<p>{post.registerDate}</p>*/}
							{/*<p>{post.lastModifiedDate}</p>*/}
						</ContentsItem>
					))}
				</BoardContents>
			</BoardWrapper>
		</>
	);
}
