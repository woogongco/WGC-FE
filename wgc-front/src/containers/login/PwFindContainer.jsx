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
const TitleContent = styled.p`
	text-align: center;
	font-size: 18px;
	font-weight: Light;
	font-style: normal;
	color: white;
`;
const IdForm = styled.div`
	margin-top: 4em;
	margin-bottom: 1em;
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

export default function PwFindContainer() {
	return (
		<Container>
			<MainContent>
				<Logo>L O I G N</Logo>
				<TitleContent>비밀번호 찾기</TitleContent>
				<IdForm>
					<IdPwd type="text" placeholder="이메일을 입력하세요	" /> <br />
				</IdForm>
				<RegisterBtn>비밀번호 찾기</RegisterBtn>
			</MainContent>
		</Container>
	);
}
