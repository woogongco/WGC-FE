import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { myInfo } from 'store/RecoilStates/UserInfo';
const Container = styled.div`
	display: flex;
`;

const Warpperdiv = styled.div`
	color: white;
	width: 80%;
`;

const Writediv = styled.div`
	border: 1px solid #ffe0e3;
	height: 15rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	position: relative;
	padding: 1rem;
`;
const UserName = styled.div`
	font-size: 1.3rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
const UserImg = styled.div`
	border: 0.1rem solid white;
	border-radius: 180px;
	width: 2rem;
	height: 2rem;
	box-sizing: border-box;
	background-size: cover;
	background-color: black;
`;

const TextArea = styled.textarea`
	border: none;
	resize: none;
	width: 90%;
	height: 8rem;
	background: rgba(217, 217, 217, 0.38);
	border: 1px solid black;
	border-radius: 10px;
	margin-left: 0.7rem;
	color: white;
	font-size: 11px;
`;

const ButtonDiv = styled.div`
	border: 0.1rem solid whiste;
	width: 5rem;
	height: 15rem;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	border: none;
	background: none;
	color: white;
	font-size: 1rem;
`;

const GuestMainDiv = styled.div`
	display: flex;
	margin-top: 5%;
	position: relative;
	width: 100%;
	height: 100%;
	margin-bottom: 2.25%;
`;

const GuestTitleDiv = styled.div`
	background: linear-gradient(
		90deg,
		#ebebeb 0.81%,
		rgba(235, 235, 235, 0.468) 26.71%,
		rgba(235, 235, 235, 0) 87.73%
	);
	width: 621px;
	height: 28px;
	opacity: 0.8;
	border-radius: 10px;
	color: black;
	justify-content: space-between;
	display: flex;
	margin-left: 0.5%;
`;

const GuestTitle = styled.span`
	font-style: normal;
	font-weight: 600;
	font-size: 13px;
	line-height: 16px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #000000;
	margin-left: 1%;
`;

const GuestTitleDateSpan = styled.span`
	font-style: normal;
	font-weight: 200;
	font-size: 10px;
	line-height: 12px;
	display: flex;
	align-items: center;
	text-align: center;
	color: #969696;
`;

const GuestItemDiv = styled.div`
	width: 100%;
	position: absolute;
	left: 11%;
	top: 10%;
`;

const GuestItemImgDiv = styled.div`
	background: #e9e9e9;
	width: 102px;
	height: 140px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	border-bottom-right-radius: 10px;
	display: flex;
	align-items: center;
`;

const GuestMainCotainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export default function GuestContainer() {
	const userInfo = useRecoilValue(myInfo);

	return (
		<>
			<Container>
				<Warpperdiv>
					<div>
						<h3>흑우님의 방명록</h3>
					</div>
					<Writediv>
						<UserName>
							<UserImg style={{ backgroundImage: `url(${userInfo.profileImage || ''})` }} />{' '}
							{userInfo.name}
						</UserName>
						<div>
							<TextArea placeholder="글을 입력하시오" />
						</div>
						<ButtonDiv>
							<Button>등록</Button>
						</ButtonDiv>
					</Writediv>
					<GuestMainCotainer>
						<GuestMainDiv>
							<GuestItemImgDiv>프로필 이미지</GuestItemImgDiv>
							<GuestTitleDiv>
								<GuestTitle>신짱구</GuestTitle>
								<GuestTitleDateSpan>2023.01.27 15:33</GuestTitleDateSpan>
							</GuestTitleDiv>
							<GuestItemDiv>
								<p>123</p>
							</GuestItemDiv>
						</GuestMainDiv>
						<GuestMainDiv>
							<GuestItemImgDiv>프로필 이미지</GuestItemImgDiv>
							<GuestTitleDiv>
								<GuestTitle>신짱구</GuestTitle>
								<GuestTitleDateSpan>2023.01.27 15:33</GuestTitleDateSpan>
							</GuestTitleDiv>
							<GuestItemDiv>
								<p>123</p>
							</GuestItemDiv>
						</GuestMainDiv>
					</GuestMainCotainer>
				</Warpperdiv>
			</Container>
		</>
	);
}
