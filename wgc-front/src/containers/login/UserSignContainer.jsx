import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Container = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
`;

const MainContent = styled.div`
	margin-top: 10em;
`;

const Logo = styled.span`
	font-size: 48px;
	font-weight: bold;
	font-style: normal;
	color: white;
	margin-left: 0.5em;
`;
const IdForm = styled.div`
	margin-top: 4em;
	margin-bottom: 1.5em;
`;
const IdPwd = styled.input`
	border: 0;
	padding: 1em;
	padding-right: 9.6em;
	background-color: #2d2d2d;
	border-radius: 5px;
	color: white;
`;

const RegisterBtn = styled.button`
	border: 0;
	padding: 1.5em 8em;
	border-radius: 5px;
	background-color: #ef8871;
	color: white;
	font-style: normal;
	font-weight : bold
	cursor: pointer;
`;

const Elart = styled.p`
	color: #ef5350;
	font-size: 14px;
`;
const WhatId = styled.span`
	cursor: pointer;
	color: #ffffff;
	opacity: 60%;
	margin-top: 1em;
`;
const LegisterForm = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	margin-top: 2em;
`;

export default function UserSignContainer() {
	return (
		<Container>
			<MainContent>
				<Logo>S I G N U P</Logo>
				<IdForm>
					<IdPwd type="text" placeholder="이메일" /> <br />
					<Elart>이미 사용중인 이메일입니다.</Elart>
					<IdPwd type="password" placeholder="비밀번호" />
				</IdForm>
				<RegisterBtn>회원가입하기</RegisterBtn>
				<LegisterForm>
					<Link to="/EmailLogin">
						<WhatId>이미 아이디가 있나요 ?</WhatId>
					</Link>
				</LegisterForm>
			</MainContent>
		</Container>
	);
}
