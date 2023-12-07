import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { axiosGet, axiosPost } from 'Utils/AxiosUtils';
import { useRecoilValue } from 'recoil';
import { myInfo } from 'store/RecoilStates/UserInfo';
import { Comment } from './comment/Comment';
import CommentWrite from './comment/CommentWrite';
import dayjs from 'dayjs';
const Container = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const TitleDiv = styled.div`
	width: 80%;
	display: flex;
	justify-content: flex-start;
	font-size: 1.7rem;
`;

const PostTitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center
	height: 30px;
	position: relative;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 17px;
	width: 80%;
`;

const UserName = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const ButtonDiv = styled.div`
	display: flex;
`;

const UserImg = styled.div`
	border: 0.1rem solid white;
	border-radius: 180px;
	width: 2.6rem;
	height: 2.6rem;
	box-sizing: border-box;
	background-size: cover;
	background-color: black;
`;

const PostTextArea = styled.div`
	resize: none; /* 사용자 임의 변경 불가 */
	resize: both; /* 사용자 변경이 모두 가능 */
	resize: horizontal; /* 좌우만 가능 */
	resize: none; /* 상하만 가능 */
	background-color: transparent;
	width: 763px;
	height: 300px;
	border: none;
	margin-top: 1.5%;
	&:focus {
		outline: none;
	}
`;

const ButtonItem = styled.button`
	border: none;
	background-color: transparent;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	cursor: pointer;
`;

const PostBottomDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 80%;
`;

const LikeBookMarkDiv = styled.div`
	display: flex;
	justify-content: space-around;
	width: 10%;
`;

const CommentLayout = styled.div`
	width: 85%;
`;

export default function WriteModifyContainer({ id }) {
	const [Loading, setLoading] = useState(false);
	const [PostList, setPostList] = useState([]);
	const [PostUser, setPostUser] = useState([]);
	const [CommentLists, setCommentLists] = useState([]);
	const [CommentLoading, setCommentLoading] = useState(false);
	const userInfo = useRecoilValue(myInfo);
	console.log(userInfo);
	const local = window.location.pathname.split('/')[2];

	const CommentList = useCallback(async () => {
		const res = await axiosGet(`/comments/${local}`);
		setCommentLists(res.data.comments);
		setCommentLoading(true);
	}, [local]);

	const getPosts = async () => {
		const res = await axiosGet(`/post/${local}`);
		setPostList(res['data']);
		setPostUser(res['data']['writer']);
		setLoading(true);
	};
	useEffect(() => {
		CommentList();
		getPosts();
	}, [CommentList]);

	return (
		<Container>
			{Loading ? (
				<>
					<TitleDiv>
						<h1>{PostList['title']}</h1>
					</TitleDiv>
					<PostTitleDiv>
						<UserName>
							<UserImg style={{ backgroundImage: `url(${userInfo.profileImage || ''})` }} />
							{PostUser['name']}
						</UserName>
						<ButtonDiv>
							<ButtonItem>수정</ButtonItem>
							<ButtonItem>삭제</ButtonItem>
						</ButtonDiv>
					</PostTitleDiv>
					<PostTextArea>{PostList['content']}</PostTextArea>
					<PostBottomDiv>
						<LikeBookMarkDiv>
							<span>
								<AiOutlineLike />
								{PostList['like']}
							</span>
							<span>
								<BsBookmark />
							</span>
						</LikeBookMarkDiv>
						<h4>{dayjs(PostList['registerDate']).format('YYYY년 MM월 DD일')}</h4>
					</PostBottomDiv>

					<CommentLayout>
						<p>댓글</p>
						<CommentWrite type={'댓글'} />
						{CommentLoading
							? CommentLists.map((e, index) => {
									return <Comment key={index} props={e} page={local} />;
							  })
							: ''}
					</CommentLayout>
				</>
			) : (
				''
			)}
		</Container>
	);
}
