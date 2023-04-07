import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	color: white;
`;

const Writediv = styled.div`
	background: #9a9a9a;
	border: 1px solid #ffe0e3;
	width: 419px;
	height: 180px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-bottom-right-radius: 20px;
	position: relative;
`;

const Imagediv = styled.div`
	border: 1px solid #bb7f84;
	background: #b1b1b1;
	border-radius: 10px;
	width: 114px;
	height: 116px;
`;

const TextArea = styled.textarea`
	border: none;
	resize: none;
	width: 264px;
	height: 113px;
	background: rgba(217, 217, 217, 0.38);
	border: 1px solid #bc787e;
	border-radius: 10px;
	margin-left: 0.7rem;
	color: white;
	font-size: 11px;
`;

const ButtonDiv = styled.div`
	position: absolute;
	top: 150px;
	right: 22px;
`;

const Button = styled.button`
	border: none;
	background: none;
	color: #350909;
`;

const GuestMainDiv = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const GuestTitleDiv = styled.div`
	margin-top: 5%;
	background: linear-gradient(
		90deg,
		#ebebeb 0.81%,
		rgba(235, 235, 235, 0.468) 26.71%,
		rgba(235, 235, 235, 0) 87.73%
	);
	width: 742px;
	height: 28px;
	opacity: 0.8;
	border-radius: 10px;
	color: black;
	display: flex;
	justify-content: space-between;
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
	display: flex;
	margin-left: 8%;
`;

const GuestItemImgDiv = styled.div`
	background: #e9e9e9;
	width: 104px;
	height: 104px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;
	border-bottom-right-radius: 10px;
	display: flex;
	align-items: center;
	margin-top: 1%;
`;

const GuestItemTextDiv = styled.div`
	margin-left: 1%;
	width: 670px;
`;

export default function GuestContainer() {
	return (
		<>
			<Container>
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
				<GuestMainDiv>
					<GuestTitleDiv>
						<GuestTitle>신짱구</GuestTitle>
						<GuestTitleDateSpan>(2023.01.27 15:33)</GuestTitleDateSpan>
					</GuestTitleDiv>
					<GuestItemDiv>
						<GuestItemImgDiv>프로필 이미지</GuestItemImgDiv>
						<GuestItemTextDiv>
							<p>방명록</p>
						</GuestItemTextDiv>
					</GuestItemDiv>
					<GuestTitleDiv>
						<GuestTitle>신짱구</GuestTitle>
						<GuestTitleDateSpan>(2023.01.27 15:33)</GuestTitleDateSpan>
					</GuestTitleDiv>
					<GuestItemDiv>
						<GuestItemImgDiv>프로필 이미지</GuestItemImgDiv>
						<GuestItemTextDiv>
							<p>방명록</p>
						</GuestItemTextDiv>
					</GuestItemDiv>
				</GuestMainDiv>
			</Container>
		</>
	);
}
