import React from 'react';
import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';

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
	& span {
		margin-left: 5px;
	}
`;

const CommentCount = styled.span`
	& span {
		margin-left: 5px;
	}
`;

export default function BoardPreview() {
	return (
		<BoardWrapper>
			{/* TODO: 타이틀 클릭 시 해당 게시판으로 이동 */}
			<BoardTitle>
				<h2>자유게시판</h2>
			</BoardTitle>
			{/* -- 게시글 리스트: 6개의 게시글만 보여주기 -- */}
			<BoardContents>
				{/* TODO: 게시글 클릭 시 해당 게시글로 이동 */}
				{/* 게시글 아이템 */}
				{/* ... */}
				{/* 게시글 아이템 */}
				<ContentsItem>
					<ContentsTitle>
						봄바람을 끝에 얼마나 우리 우리의 놀이 거친 같은 힘있다. 뼈 투명하되 피고 찾아 자신과
						말이다. 같지 수 실현에 평화스러운 천자만홍이 있다. 곳으로 그들은 가슴에 그러므로 같이,
						없으면, 갑 트고, 듣는다. 있는 그들은 만천하의 설산에서 이상은 몸이 황금시대를 곳으로
						사막이다. 천지는 내는 얼음에 있는가?
					</ContentsTitle>
					<ContentsDetails>
						<LikeCount>
							<FaRegThumbsUp />
							<span>336</span>
						</LikeCount>
						<CommentCount>
							<FaRegCommentDots />
							<span>12</span>
						</CommentCount>
					</ContentsDetails>
				</ContentsItem>
				{/* 게시글 아이템 */}
				<ContentsItem>
					<ContentsTitle>게시글 제목1</ContentsTitle>
					<ContentsDetails>
						<LikeCount>
							<FaRegThumbsUp />
							<span>33</span>
						</LikeCount>
						<CommentCount>
							<FaRegCommentDots />
							<span>6</span>
						</CommentCount>
					</ContentsDetails>
				</ContentsItem>
				{/* 게시글 아이템 */}
				<ContentsItem>
					<ContentsTitle>게시글 제목1</ContentsTitle>
					<ContentsDetails>
						<LikeCount>
							<FaRegThumbsUp />
							<span>33</span>
						</LikeCount>
						<CommentCount>
							<FaRegCommentDots />
							<span>6</span>
						</CommentCount>
					</ContentsDetails>
				</ContentsItem>
				{/* 게시글 아이템 */}
				<ContentsItem>
					<ContentsTitle>게시글 제목1</ContentsTitle>
					<ContentsDetails>
						<LikeCount>
							<FaRegThumbsUp />
							<span>33</span>
						</LikeCount>
						<CommentCount>
							<FaRegCommentDots />
							<span>6</span>
						</CommentCount>
					</ContentsDetails>
				</ContentsItem>
				{/* 게시글 아이템 */}
				<ContentsItem>
					<ContentsTitle>게시글 제목1</ContentsTitle>
					<ContentsDetails>
						<LikeCount>
							<FaRegThumbsUp />
							<span>33</span>
						</LikeCount>
						<CommentCount>
							<FaRegCommentDots />
							<span>6</span>
						</CommentCount>
					</ContentsDetails>
				</ContentsItem>
			</BoardContents>
		</BoardWrapper>
	);
}
