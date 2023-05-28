import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
	const [Email, setEmaill] = useInput();
	const [password, setpassword] = useInput();
	const navigator = useNavigate();

	const handleLogin = () => {
		fetch('http://ec2-54-180-120-146.ap-northeast-2.compute.amazonaws.com/member/sign', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				mail: Email,
				password: password,
			}),
		})
			.then(response => response.json())
			.then(data =>
				data.status === 200
					? localStorage.setItem('Cookie', data.data) + navigator('/MiniMain')
					: data.status === 400
					? alert('이메일 혹은 패스워드가 일치하지 않습니다.')
					: data.status === 500
					? alert('Server Error ')
					: ' ',
			)
			.catch(error => alert(error));
	};

	if (!localStorage.getItem('Cookie') === undefined) {
		navigator('/MiniMain');
	}

	return (
		<Container>
			<MainContent>
				<Logo>L O I G N</Logo>
				<IdForm>
					<IdPwd type="text" placeholder="이메일" value={Email} onChange={setEmaill} /> <br />
					<IdPwd type="password" placeholder="비밀번호" value={password} onChange={setpassword} />
				</IdForm>
				<Password>비밀번호 찾기</Password>
				<StatusForm>
					<StatusCheckBox type="checkbox" /> <StatusText>로그인 상태 기억하기</StatusText>
				</StatusForm>
				<RegisterBtn onClick={handleLogin}>로그인 하기</RegisterBtn>
			</MainContent>
		</Container>
	);
}
function useInput() {
	const [value, setValue] = useState('');
	const handler = useCallback(e => {
		setValue(e.target.value);
	}, []);
	return [value, handler, setValue];
}
