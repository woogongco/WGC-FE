import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FaRegThumbsUp } from 'react-icons/fa';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Wrapper = styled.section`
	position: relative;
	border: 1px solid #767676;
	border-radius: 10px;

	/* css 초기화 */
	& h3 {
		margin: 0;
		padding: 0;
	}

	& p {
		margin: 0;
		text-decoration: none;
		color: inherit;
		font-family: inherit;
	}

	& img {
		vertical-align: top;
	}
`;

const NewBadge = styled.span`
	position: absolute;
	top: -20px;
	color: #970505;
	font-weight: bold;
	font-size: 0.75rem;
`;

const PostCover = styled.img`
	width: 100%;
	height: 180px;
	object-fit: cover;
	border-radius: 10px 10px 0 0;
`;

const PostContents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 12px;
	font-size: 0.875rem;
`;

const PostTitle = styled.h3`
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1rem;
`;

const PostDescription = styled.p`
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
	height: 84px;
	line-height: 1.3rem;
`;

const PostDetails = styled.div`
	flex-shrink: 0;
	display: flex;
	justify-content: flex-end;
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

export default function Post({ id, title, content, like, view }) {
	const navigate = useNavigate();
	const HandleNavigate = useCallback(
		async e => {
			navigate(`/board/${id}`);
		},
		[navigate],
	);
	return (
		<Wrapper onClick={HandleNavigate}>
			<NewBadge>NEW</NewBadge>
			<PostCover
				src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
				alt="게시글 미리보기 이미지"
			/>
			<PostContents>
				<PostTitle>{title}</PostTitle>
				<PostDescription>{content}</PostDescription>
				<PostDetails>
					<LikeCount>
						<FaRegThumbsUp />
						<span>{like}</span>
					</LikeCount>
					<CommentCount>
						<FaRegCommentDots />
						<span>{view}</span>
					</CommentCount>
				</PostDetails>
			</PostContents>
		</Wrapper>
	);
}
