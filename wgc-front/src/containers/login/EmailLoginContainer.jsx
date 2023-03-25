import React from 'react';
import styled from 'styled-components';

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
	margin-left: 0.7em;
`;
const IdForm = styled.div`
	margin-top: 4em;
`;
const IdPwd = styled.input`
	border: 0;
	padding: 1em;
	padding-right: 9.6em;
	background-color: #2d2d2d;
	border-radius: 5px;
	color: white;
	margin-bottom: 1em;
`;

const RegisterBtn = styled.button`
	border: 0;
	padding: 1.5em 8em;
	border-radius: 5px;
	background-color: #ef8871;
	color: white;
	font-style: normal;
	font-weight: bold;
	cursor: pointer;
`;
const Password = styled.span`
	color: #4e89fc;
	margin-left: 0.5em;
	cursor: pointer;
`;
const StatusForm = styled.div`
	margin: 1em 0;
`;
const StatusCheckBox = styled.input`
	background-color: #1e1e1e;
`;
const StatusText = styled.span`
	font-size: 14px;
	font-style: nomal;
	font-weight: bold;
	color: white;
	opacity: 87%;
`;
export default function EmailLoginContainer() {
	return (
		<Container>
			<MainContent>
				<Logo>L O I G N</Logo>
				<IdForm>
					<IdPwd type="text" placeholder="이메일" /> <br />
					<IdPwd type="password" placeholder="비밀번호" />
				</IdForm>
				<Password>비밀번호 찾기</Password>
				<StatusForm>
					<StatusCheckBox type="checkbox" /> <StatusText>로그인 상태 기억하기</StatusText>
				</StatusForm>
				<RegisterBtn>로그인 하기</RegisterBtn>
			</MainContent>
		</Container>
	);
}
