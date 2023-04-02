import React from 'react';
import styled from 'styled-components';
import Profile from 'components/profile/Profile';

const Header = styled.header`
	background-color: blue;
	height: 64px;
`;

const SideDiv = styled.div`
	float: right;
	flex: 1;
	flex-basis: 10%;
`;
const SectionLeft = styled.div`
	flex: 1;
	flex-basis: 10%;
`;

const SectionCenter = styled.div`
	flex: 3;
`;

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 87px;
	background-color: black;
	width: 100%;
`;

const SectionContiner = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

const SectionItemTitle = styled.div`
	display: flex;
	color: white;
	font-style: normal;
	font-weight: 600;
	font-size: 2rem;
	line-height: 2rem;
	margin-top: 3rem;
	margin-left: 1rem;
`;

const SectionMainItem = styled.div`
	display: flex;
	height: 12%;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const SectionMainImg = styled.div`
	width: 8%;
	background-color: aliceblue;
	border-radius: 360%;
	height: 80%;
	margin-right: 3%;
`;

const SectionMainTextContainer = styled.div`
	color: white;
	margin-left: 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
`;

const SectionButton = styled.button`
	color: white;
	background-color: #2e2e2e;
	width: 5vw;
	height: 5vh;
	border-radius: 0.5em;
	border: none;
`;

const SectionButtonDiv = styled.div`
	margin-left: auto;
`;

export default function FriendContainer() {
	return (
		<>
			<Header>헤더</Header>
			<div>
				<SectionContiner>
					<SectionLeft>
						<Profile />
					</SectionLeft>
					<SectionCenter>
						<SectionItemTitle>
							<p>일촌 목록</p>
						</SectionItemTitle>
						<SectionMainItem>
							<SectionMainTextContainer>
								<SectionMainImg />
								<div>
									<p>박진현</p>
									<p>안녕하세요 ............</p>
								</div>
								<SectionButtonDiv>
									<SectionButton>일촌 끊기</SectionButton>
								</SectionButtonDiv>
							</SectionMainTextContainer>
							<SectionMainTextContainer>
								<SectionMainImg />
								<div>
									<p>박진현</p>
									<p>안녕하세요 ............</p>
								</div>
								<SectionButtonDiv>
									<SectionButton>일촌 끊기</SectionButton>
								</SectionButtonDiv>
							</SectionMainTextContainer>
							<SectionMainTextContainer>
								<SectionMainImg />
								<div>
									<p>박진현</p>
									<p>안녕하세요 ............</p>
								</div>
								<SectionButtonDiv>
									<SectionButton>일촌 끊기</SectionButton>
								</SectionButtonDiv>
							</SectionMainTextContainer>
							<SectionMainTextContainer>
								<SectionMainImg />
								<div>
									<p>박진현</p>
									<p>안녕하세요 ............</p>
								</div>
								<SectionButtonDiv>
									<SectionButton>일촌 끊기</SectionButton>
								</SectionButtonDiv>
							</SectionMainTextContainer>
							<SectionMainTextContainer>
								<SectionMainImg />
								<div>
									<p>박진현</p>
									<p>안녕하세요 ............</p>
								</div>
								<SectionButtonDiv>
									<SectionButton>일촌 끊기</SectionButton>
								</SectionButtonDiv>
							</SectionMainTextContainer>
						</SectionMainItem>
					</SectionCenter>
					<SideDiv>오른쪽</SideDiv>
				</SectionContiner>
			</div>
			<Footer>footer</Footer>
		</>
	);
}
