import React from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Profile from 'components/profile/Profile';

const Section = styled.div`
	display: flex;
`;
const UserInterface = styled.div`
	width: 60%;
	padding: 5rem 0 0 3rem;
	border-left: 0.5px solid white;
`;
const Article = styled.div`
	border: 1px solid red;
`;
const TitleContainer = styled.div`
	border-bottom: 1px solid #2e2e2e;
	width: 90%;
	margin-bottom: 1rem;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: Semi-bold;
	color: #ffffff;
`;
const TypeContainer = styled.div`
	display: grid;
	grid-template-columns: 7rem 20rem;
	grid-template-rows: 5rem 5rem 5rem 5rem 5rem 5rem;
	border-bottom: 1px solid #2e2e2e;
	width: 90%;
`;
const UserType = styled.span`
	color: white;
	border-right: 1px solid #454545;
	font-size: 13px;
`;
const Content = styled.div`
	margin-left: 1rem;
`;
const LogInfo = styled.div`
	color: #ffffff;
	border-radius: 5px;
	border: 1px solid #454545;
	padding: 0.5rem;
	font-size: 13px;
`;
const UserInput = styled.input`
	color: #ffffff;
	border: 1px solid #454545;
	border-radius: 5px;
	background-color: transparent;
	width: 95%;
	padding: 0.5rem 0 0.5rem 0.5rem;
	font-size: 13px;
`;
export default function UserInfoContainer() {
	return (
		<div>
			<Header />
			<Section>
				<Profile />
				<UserInterface>
					<TitleContainer>
						<Title>회원수정</Title>
					</TitleContainer>
					<TypeContainer>
						<UserType>이름</UserType>
						<Content>
							<LogInfo>주먹밥</LogInfo>
						</Content>
						<UserType>이메일</UserType>
						<Content>
							<LogInfo>test@gmail.com</LogInfo>
						</Content>
						<UserType>비밀번호</UserType>
						<Content>
							<UserInput type="password" />
						</Content>
						<UserType>비밀번호 확인</UserType>
						<Content>
							<UserInput type="password" />
						</Content>
						<UserType>가입일</UserType>
						<Content>
							<LogInfo>2023. 04. 20</LogInfo>
						</Content>
						<UserType>연락처</UserType>
						<Content>
							<UserInput type="password" placeholder="000-0000-0000" />
						</Content>
					</TypeContainer>
				</UserInterface>
				<Article />
			</Section>
		</div>
	);
}
