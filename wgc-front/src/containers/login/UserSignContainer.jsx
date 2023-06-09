import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useInput from 'constants/useInput';
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
	margin-top: 1rem;
`;
const ErrorText = styled.span`
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
	const [Name, setName] = useInput('');
	const [Email, setEmail] = useInput('');
	const [Password, setPassword] = useInput('');
	const handlesubmit = async () => {
		await fetch('http://ec2-54-180-120-146.ap-northeast-2.compute.amazonaws.com/member', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: Name,
				mail: Email,
				password: Password,
			}),
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(err => console.log(err));
	};
	return (
		<Container>
			<MainContent>
				<Logo>S I G N U P</Logo>
				<IdForm>
					<IdPwd type="text" placeholder="이름" value={Name} onChange={setName} /> <br />
					<IdPwd type="text" placeholder="이메일" value={Email} onChange={setEmail} /> <br />
					<br />
					<IdPwd type="password" placeholder="비밀번호" value={Password} onChange={setPassword} />
				</IdForm>
				<RegisterBtn onClick={handlesubmit}>회원가입하기</RegisterBtn>
				<LegisterForm>
					<Link to="/EmailLogin">
						<WhatId>이미 아이디가 있나요 ?</WhatId>
					</Link>
				</LegisterForm>
			</MainContent>
		</Container>
	);
}
