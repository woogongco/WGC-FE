import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import LoginMainLogo from 'assets/LoginMainLogo.png';
import KakaoButton from 'assets/Kakaobutton.png';
import GitButton from 'assets/Gitbutton.png';
import EmailButton from 'assets/Emailbutton.png';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;

const MainContent = styled.div`
	margin-top: 3em;
`;

const LogoText = styled.img`
	width: 30em;
`;

const Directspan = styled.span`
	color: white;
	margin: 1em;
	font-size: 14px;
	font-weight: bold;
	text-decoration: none;
`;
const DirectDiv = styled.div`
	background-color: #2d2d2d;
	border: 1px solid white;
	width: 13em;
	border-radius: 30px;
	margin-left: 8em;
	padding: 1em 0;
	text-align: center;
	cursor: pointer;
`;
const ButtonDiv = styled.div`
	width: 26em;
	margin-top: 2em;
	margin-left: 5em;
`;
const Btn = styled.img`
	margin-top: 1em;
`;
const ModalBackdrop = styled.div`
	// Modal이 떴을 때의 배경을 깔아주는 CSS를 구현
	z-index: 1; //위치지정 요소
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.4);
	border-radius: 10px;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
`;
const SNSContainer = styled.div`
	background-color: white;
	width: 500px;
	height: 500px;
	border-radius: 10px;
`;
const DeletBtn = styled.div`
	display: flex;
	float: right;
	margin: 10px;
`;
const KaKaoLoGo = styled.img`
	width:150px;
	height :200p;x
`;
const KaKaoMent = styled.p`
	font-size: 20px;
	text-align: center;
`;
const KaKaLoginBtn = styled.div`
	width: 400px;
	height: 50px;
	border-radius: 10px;
	background-color: #fae64d;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ContainerContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
`;

export default function LoginMainContainer() {
	const [openModal, setModal] = useState(false);

	const openModalHander = useCallback(() => {
		setModal(!openModal);
	}, [openModal]);

	return (
		<Container>
			<MainContent>
				<LogoText src={LoginMainLogo} alt="제발" />
				<DirectDiv>
					<Directspan href="">3초안에 시작하기🚀</Directspan>
				</DirectDiv>
				<ButtonDiv>
					<Btn src={KakaoButton} alt="카카오" onClick={openModalHander} />
					{openModal ? (
						<ModalBackdrop>
							<SNSContainer>
								<DeletBtn onClick={openModalHander}>
									<AiOutlineClose />
								</DeletBtn>
								<ContainerContent>
									<KaKaoLoGo
										src="https://cdn.imweb.me/upload/S20210304872ba49a108a8/89a68d1e3674a.png"
										alt="카카오사진"
									/>
									<KaKaoMent>
										간편하게 로그인하고 <br /> 다양한서비스를 이용해보세요.
									</KaKaoMent>
									<KaKaLoginBtn>카카오로그인</KaKaLoginBtn>
									<p>다른 이메일로 시작하기</p>
								</ContainerContent>
							</SNSContainer>
						</ModalBackdrop>
					) : (
						''
					)}
					<Btn src={GitButton} alt="깃허브" />
					<Link to="/UserSign">
						<Btn src={EmailButton} alt="이메일" />
					</Link>
				</ButtonDiv>
			</MainContent>
		</Container>
	);
}
