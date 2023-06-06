import React from 'react';
import styled from 'styled-components';
import { AiOutlineLike } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';

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

const PostTextArea = styled.textarea`
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

const CommnetDiv = styled.div`
	width: 58%;
	display: flex;
	justify-content: flex-start;
`;

export default function WriteModifyContainer() {
	return (
		<Container>
			<TitleDiv>
				<h3>00님의 게시글</h3>
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
						<span>게시글 제목</span>
						<span>2023.03.04 13:23</span>
					</TitleText>
				</PostTitleDiv>
				<PostTextArea></PostTextArea>
				<PostBottomDiv>
					<LikeBookMarkDiv>
						<span>
							<AiOutlineLike />
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
			<CommnetDiv>
				<p>댓글</p>
			</CommnetDiv>
		</Container>
	);
}