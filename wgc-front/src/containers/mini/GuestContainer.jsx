import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

const Warpperdiv = styled.div`
	margin-left: 20%;
	color: white;
	height: 100%;
	width: 100%;
`;

const Writediv = styled.div`
	border: 1px solid #ffe0e3;
	width: 731px;
	height: 221px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	position: relative;
`;

const Imagediv = styled.div`
	border: 1px solid white;
	background: black;
	border-radius: 10px;
	width: 180px;
	height: 180px;
`;

const TextArea = styled.textarea`
	border: none;
	resize: none;
	width: 472px;
	height: 163px;
	background: rgba(217, 217, 217, 0.38);
	border: 1px solid black;
	border-radius: 10px;
	margin-left: 0.7rem;
	color: white;
	font-size: 11px;
`;

const ButtonDiv = styled.div`
	position: absolute;
	top: 200px;
	right: 22px;
`;

const Button = styled.button`
	border: none;
	background: none;
	color: white;
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
	width: 100%;
	height: 100%;
`;

export default function GuestContainer() {
	return (
		<>
			<Container>
				<Warpperdiv>
					<div>
						<h3>흑우님의 방명록</h3>
					</div>
					<Writediv>
						<Imagediv />
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
