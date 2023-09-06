import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInput from 'constants/useInput';
import { axiosPost } from '../../Utils/AxiosUtils';
import { ALERT_TYPE, errorAlert, successAlert } from '../../Utils/AlertMessageUtils';
import { message } from 'antd';
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
	const navigate = useNavigate();
	const [Email, setEmail] = useInput();
	const [password, setPassword] = useInput();
	const navigator = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const [isSave, setIsSave] = useState(false);

	const alert = async (type, content, duration = 2) => {
		return messageApi.open({
			type: type,
			content: content,
			duration: duration,
		});
	};

	const handleLogin = async () => {
		if (!Email) return alert(ALERT_TYPE.ERROR, '이메일을 입력하세요 !');
		if (!password) return alert(ALERT_TYPE.ERROR, '비밀번호을 입력하세요 !');

		const res = await axiosPost('/member/sign', { mail: Email, password: password });

		if (res.status === 200) {
			localStorage.setItem('token', res.data);
			await alert(ALERT_TYPE.SUCCESS, '로그인 성공 !', 1);
			return navigate('/MiniMain');
		}

		if (res.status === 400)
			return alert(ALERT_TYPE.ERROR, '입력한 정보가 올바르지 않거나 존재하지 않는 회원입니다.');

		if (res.status === 500) return alert(ALERT_TYPE.ERROR, '서버와 통신이 원활하지 않습니다.');
	};

	return (
		<Container>
			{contextHolder}
			<MainContent>
				<Logo>L O I G N</Logo>
				<IdForm>
					<IdPwd type="text" placeholder="이메일" value={Email} onChange={setEmail} /> <br />
					<IdPwd type="password" placeholder="비밀번호" value={password} onChange={setPassword} />
				</IdForm>
				<Password>비밀번호 찾기</Password>
				<StatusForm>
					<StatusCheckBox type="checkbox" onChange={event => setIsSave(event.target.checked)} />{' '}
					<StatusText>로그인 상태 기억하기</StatusText>
				</StatusForm>
				<RegisterBtn onClick={handleLogin}>로그인 하기</RegisterBtn>
			</MainContent>
		</Container>
	);
}
