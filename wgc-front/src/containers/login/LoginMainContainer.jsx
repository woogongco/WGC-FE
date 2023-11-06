import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import LoginMainLogo from 'assets/LoginMainLogo.png';
import KakaoButton from 'assets/Kakaobutton.png';
import GitButton from 'assets/Gitbutton.png';
import EmailButton from 'assets/Emailbutton.png';
import { Link, useNavigate } from 'react-router-dom';
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
	cursor: pointer;
`;

export default function LoginMainContainer() {
	const [openModal, setModal] = useState(false);
	const navigate = useNavigate();

	return (
		<Container>
			<MainContent>
				<LogoText src={LoginMainLogo} alt="제발" />
				<DirectDiv>
					<Directspan href="">3초안에 시작하기🚀</Directspan>
				</DirectDiv>
				<ButtonDiv>
					<div
						style={{
							width: '300px',
							height: '45px',
							backgroundColor: 'rgb(56,117,246)',
							borderRadius: '7px',
							textAlign: 'center',
							cursor: 'pointer',
						}}
						onClick={() => {
							navigate('/EmailLogin');
						}}
					>
						<div style={{ paddingTop: '10px' }}>로그인</div>
					</div>
					<Btn src={KakaoButton} alt="카카오" className="kakao-login-button" />
					<Btn src={GitButton} alt="깃허브" />
					<Link to="/UserSign">
						<Btn src={EmailButton} alt="이메일" />
					</Link>
				</ButtonDiv>
			</MainContent>
		</Container>
	);
}
