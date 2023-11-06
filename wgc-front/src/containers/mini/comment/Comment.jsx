import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import { axiosDelete } from 'Utils/AxiosUtils';
import CommentWrite from './CommentWrite';
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
	width: 100%;
`;
const CommentMent = styled.div`
	margin: 0 5px;
	cursor: pointer;
	font-size: 11px;
`;
const ExtraContainer = styled.div`
	display: flex;
	align-item: center;
	width: 100%;
`;
const ArrowDiv = styled.div`
	font-size: 1.7rem;
	margin-left: 2rem;
`;
export function Comment({ props }) {
	const [ExtraComment, setExtraComment] = useState(false);
	const [ModifyInput, setModifyInput] = useState(false);
	const local = window.location.pathname.split('/')[2];
	const CommentDel = useCallback(async e => {
		await axiosDelete(`/comments/${e}`);
		console.log('삭제', e);
		window.location.replace(`/board/${local}`);
	}, []);
	const HandleWrite = () => {
		console.log('댓글');
		setExtraComment(prev => !prev);
	};
	useEffect(() => {}, [props]);
	return (
		<div>
			{!ModifyInput ? (
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
								<CommentMent onClick={() => setModifyInput(true)}>수정</CommentMent>
								<CommentMent onClick={() => CommentDel(props.commentId)}>삭제</CommentMent>
								<CommentMent onClick={HandleWrite}>대댓글</CommentMent>
							</CommentContent>
						</CommentContent>
					</CommentDiv>
				</CommentContainer>
			) : (
				<CommentWrite type={'수정'} props={props} text={props.content} />
			)}
			{ExtraComment ? (
				<ExtraContainer>
					<ArrowDiv>↳</ArrowDiv>
					<CommentWrite type={'대댓글'} props={props} />
				</ExtraContainer>
			) : (
				''
			)}
			{props.replies.map(element => {
				return (
					<ExtraContainer>
						<ArrowDiv>↳</ArrowDiv>
						<CommentContainer>
							<CommentProfile style={{ backgroundImage: `url(${element.writer.profileImage})` }} />
							<CommentDiv>
								<CommentName>
									<div>{element.writer.name}</div>
									<div>
										{element.registerDate
											.replace(/-/gi, '.')
											.replace('T', ' ')
											.slice(0, element.registerDate.length - 10)}
									</div>
								</CommentName>
								<CommentContent>
									<Commentdetail>{element.content}</Commentdetail>
									<CommentContent>
										<CommentMent onClick={HandleWrite}>수정</CommentMent>
										<CommentMent onClick={() => CommentDel(props.commentId)}>삭제</CommentMent>
										<CommentMent onClick={HandleWrite}>대댓글</CommentMent>
									</CommentContent>
								</CommentContent>
							</CommentDiv>
						</CommentContainer>
					</ExtraContainer>
				);
			})}
		</div>
	);
}
