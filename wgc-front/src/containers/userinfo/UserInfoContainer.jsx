import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaPen, FaPlusCircle } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';
import moment from 'moment/moment';

const Section = styled.div`
	display: flex;
`;
const UserInterface = styled.div`
	width: 55%;
	padding: 5rem 0 0 3rem;
	border-left: 0.5px solid white;
`;

const TitleContainer = styled.div`
	border-bottom: 1px solid #2e2e2e;
	width: 90%;
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: Semi-bold;
	color: #ffffff;
`;
const ChangeInfo = styled.button`
	border-radius: 5px;
	border: 0px;
	background-color: #fa9199;
	color: white;
	height: 35px;
	width: 109px;
	margin-left: 20px;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
`;
const TypeContainer = styled.div`
	display: grid;
	margin-top: 40px;
	grid-template-columns: 7rem 20rem;
	grid-template-rows: 5rem 5rem 5rem 5rem 5rem 5rem;
	border-bottom: 1px solid #2e2e2e;
	width: 90%;
`;
const UserType = styled.span`
	color: white;
	font-size: 13px;
	margin-top: 0.7rem;
	text-align: center;
`;
const Content = styled.div`
	padding-left: 1rem;
	border-left: 1px solid #454545;
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
const ContainerDiv = styled.div`
	position: relative;
	display: inline-block;
	margin: 1.5em 0 1.5em 15px;
	width: 150px;
	height: 150px;
	background: #c4c4c4;
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	cursor: pointer;
`;
export default function UserInfoContainer() {
	const userInfo = useRecoilValue(myInfo);
	useEffect(() => {
		console.log(userInfo);
	}, []);
	return (
		<div>
			{userInfo && (
				<Section>
					<UserInterface>
						<TitleContainer>
							<Title>회원수정</Title>
							<ChangeInfo>
								<FaPen />
								작성하기
							</ChangeInfo>
						</TitleContainer>
						<TypeContainer>
							<UserType>이름</UserType>
							<Content>
								<LogInfo>{userInfo.name}</LogInfo>
							</Content>
							<UserType>이메일</UserType>
							<Content>
								<LogInfo>{userInfo.mail}</LogInfo>
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
								<LogInfo>
									{moment(userInfo.registerDateTime).add(9, 'hours').format('YYYY-MM-DD hh:ss')}
									{/*{userInfo.registerDateTime}*/}
								</LogInfo>
							</Content>
							<UserType>연락처</UserType>
							<Content>
								<UserInput type="password" placeholder="000-0000-0000" />
							</Content>
						</TypeContainer>
						<Title>프로필 이미지</Title>
						<ContainerDiv>
							<FaPlusCircle />
						</ContainerDiv>
					</UserInterface>
				</Section>
			)}
		</div>
	);
}
