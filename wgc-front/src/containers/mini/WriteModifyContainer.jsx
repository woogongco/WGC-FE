import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { FaThumbsUp } from 'react-icons/fa';
import axios from 'axios';
const Container = styled.div`
	width: 100%;
	height: 100%;
	color: white;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const TitleDiv = styled.div`
	width: 58%;
	display: flex;
	justify-content: flex-start;
`;

const PostTitleDiv = styled.div`
	display: flex;
	height: 30px;
	position: relative;
	font-family: 'Inter';
	font-style: normal;
	font-weight: 300;
	font-size: 14px;
	line-height: 17px;
`;

const TitleText = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	&::before {
		content: '';
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		position: absolute;
		top: 80%;
		width: 90%;
	}
`;

const PostDiv = styled.div`
	width: 769px;
	height: 379px;
	border: 1px solid white;
`;

const ProfileDiv = styled.div`
	position: relative;
	top: -150%;
	width: 76px;
	height: 76px;
	text-align: center;
	background: linear-gradient(219.11deg, #b9e6e9 30.15%, #cb8387 89.69%);
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CategoryDiv = styled.div`
	width: 58%;
	display: flex;
	justify-content: flex-end;
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
`;

const PostBottomDiv = styled.div`
	display: flex;
	justify-content: space-between;
`;

const LikeBookMarkDiv = styled.div`
	display: flex;
	justify-content: space-around;
	width: 10%;
`;

const CategoryItemDiv = styled.div`
	margin-bottom: 1%;
	border: 1px solid white;
	transform: rotate(-0.04deg);
	border-radius: 5px;
`;

const CategoryText = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */
	width: 96px;
	height: 26px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const CommentLayout = styled.div`
	width: 85%;
`;
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
	&:focus {
		outline: none;
	}
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
export default function WriteModifyContainer() {
	const [PostList, setPostList] = useState([]);
	const [PostUser, setPostUser] = useState([]);

	useEffect(() => {
		const getPosts = async () => {
			axios
				.get('http://ec2-54-180-120-146.ap-northeast-2.compute.amazonaws.com/post/1')
				.then(response => {
					setPostList(response.data['data']);
					setPostUser(response.data['data']['writer']);
				});
		};

		getPosts();
	}, []);

	useEffect(
		e => {
			// PostList['registerDate'] = PostList['registerDate'];
		},
		[PostList],
	);
	return (
		<Container>
			<TitleDiv>
				<h3>{PostUser['name']}님의 게시판</h3>
			</TitleDiv>
			<CategoryDiv>
				<CategoryItemDiv>
					<CategoryText>자유 게시판</CategoryText>
				</CategoryItemDiv>
			</CategoryDiv>
			<PostDiv>
				<PostTitleDiv>
					<ProfileDiv>이미지</ProfileDiv>
					<TitleText>
						<span>{PostList['title']}</span>
						<span>
							{
								// .replace(/-/gi, '.').replace('T', ' ').slice(0, PostList['registerDate'].length - 3)
								PostList['registerDate']
							}
						</span>
					</TitleText>
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
					<div>
						<ButtonItem>수정</ButtonItem>
						<ButtonItem>삭제</ButtonItem>
					</div>
				</PostBottomDiv>
			</PostDiv>
			<CommentLayout>
				<p>댓글</p>
				<CommentContainer>
					<CommentProfile />
					<CommentDiv>
						<CommentName>이름</CommentName>
						<CommentInput placeholder="여기에 작성해주세요" />
					</CommentDiv>
				</CommentContainer>
				<Comment />
			</CommentLayout>
		</Container>
	);
}

export function Comment() {
	return (
		<div>
			<CommentContainer>
				<CommentProfile />
				<CommentDiv>
					<CommentName>
						<div>작성자 이름</div>
						<div> 시간</div>
					</CommentName>
					<CommentContent>
						<Commentdetail>내용</Commentdetail>
						<CommentContent>
							<CommentMent>
								<FaThumbsUp />
							</CommentMent>
							<CommentMent>수정</CommentMent>
							<CommentMent>삭제</CommentMent>
							<CommentMent>댓글</CommentMent>
						</CommentContent>
					</CommentContent>
				</CommentDiv>
			</CommentContainer>
		</div>
	);
}
