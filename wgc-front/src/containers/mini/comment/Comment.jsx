import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import { axiosDelete } from 'Utils/AxiosUtils';
const CommentDiv = styled.div`
	border: 1px solid #5e5e63;
	border-radius: 5px;
	margin-bottom: 20px;
	padding: 10px;
	width: 100%;
	padding-left: 40px;
`;
const CommentName = styled.div`
	font-size: 14px;
	border-bottom: 1px solid #5e5e63;
	display: flex;
	justify-content: space-between;
`;
const CommentContent = styled.div`
	display: flex;
	justify-content: space-between;

	align-items: center;
`;
const CommentProfile = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	background: linear-gradient(219.11deg, #b9e6e9 30.15%, #cb8387 89.69%);
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	background-size: cover;
	left: 30px;
`;
const Commentdetail = styled.div`
	font-size: 13px;
`;
const CommentContainer = styled.div`
	display: flex;
`;
const CommentMent = styled.div`
	margin: 0 5px;
	cursor: pointer;
	font-size: 11px;
`;

export function Comment({ props }) {
	const CommentDel = useCallback(async e => {
		await axiosDelete(`/comments/${e}`);
		console.log('삭제');
	}, []);
	useEffect(() => {}, [props]);
	return (
		<div>
			<CommentContainer>
				<CommentProfile style={{ backgroundImage: `url(${props.writer.profileImage})` }} />
				<CommentDiv>
					<CommentName>
						<div>{props.writer.name}</div>
						<div>
							{props.registerDate
								.replace(/-/gi, '.')
								.replace('T', ' ')
								.slice(0, props.registerDate.length - 10)}
						</div>
					</CommentName>
					<CommentContent>
						<Commentdetail>{props.content}</Commentdetail>
						<CommentContent>
							<CommentMent>
								<FaThumbsUp />
							</CommentMent>
							<CommentMent>수정</CommentMent>
							<CommentMent onClick={() => CommentDel(props.commentId)}>삭제</CommentMent>
							<CommentMent>댓글</CommentMent>
						</CommentContent>
					</CommentContent>
				</CommentDiv>
			</CommentContainer>
		</div>
	);
}
