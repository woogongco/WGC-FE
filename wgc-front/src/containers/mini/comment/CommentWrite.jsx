import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { myInfo } from 'store/RecoilStates/UserInfo';
import { axiosPost, axiosPut } from 'Utils/AxiosUtils';
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
const CommentInput = styled.input`
	background-color: transparent;
	border: none;
	color: white;
	width: 90%;
	&:focus {
		outline: none;
	}
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
const CommentContainer = styled.div`
	display: flex;
	width: 100%;
`;
const CommentWrite = ({ type, props, text }) => {
	const [PutComment, setPutCommput] = useState(text || '');
	const [TextComment, setTextComment] = useState('');
	const userInfo = useRecoilValue(myInfo);
	const local = window.location.pathname.split('/')[2];
	const onKeyPress = useCallback(e => {
		if (e.key === 'Enter') {
			onComment(e);
		}
	}, []);
	const putonKeyPress = useCallback(e => {
		if (e.key === 'Enter') {
			PutCommont(e);
		}
	});
	const PutCommont = useCallback(
		async e => {
			await axiosPut(`/comments/${props.commentId}`, { content: PutComment });
			window.location.replace(`/board/${local}`);
		},
		[PutComment],
	);
	const typeComment = async e => (
		await axiosPost(`/comments/${local}`, { content: e.target.value }),
		setTextComment(''),
		window.location.replace(`/board/${local}`)
	);
	const typeReply = async e => (
		await axiosPost(`/comments/${props.commentId}/reply`, { content: e.target.value }),
		setTextComment(''),
		window.location.replace(`/board/${local}`)
	);

	const onComment = useCallback(
		async e => {
			if (type === '댓글') {
				typeComment(e);
			} else if (type === '대댓글') {
				typeReply(e);
			}
		},
		[type],
	);
	return (
		<div>
			<CommentContainer>
				{type === '수정' ? (
					<>
						<CommentProfile style={{ backgroundImage: `url(${userInfo.profileImage})` }} />
						<CommentDiv>
							<CommentName>{userInfo.name}</CommentName>
							<CommentInput
								type="text"
								placeholder="여기에 작성해주세요"
								value={PutComment}
								onChange={e => setPutCommput(e.target.value)}
								onKeyPress={e => putonKeyPress(e)}
							/>
						</CommentDiv>
					</>
				) : userInfo ? (
					<>
						<CommentProfile style={{ backgroundImage: `url(${userInfo.profileImage})` }} />
						<CommentDiv>
							<CommentName>{userInfo.name}</CommentName>
							<CommentInput
								type="text"
								placeholder="여기에 작성해주세요"
								value={TextComment}
								onChange={e => setTextComment(e.target.value)}
								onKeyPress={e => onKeyPress(e)}
							/>
						</CommentDiv>
					</>
				) : (
					<div>로그인 해주세요</div>
				)}
			</CommentContainer>
		</div>
	);
};

export default CommentWrite;
