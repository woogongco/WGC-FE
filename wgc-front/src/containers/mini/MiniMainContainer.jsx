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
	flex-basis: 100px;
`;
const SectionLeft = styled.div`
	flex: 1;
	flex-basis: 100px;
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
`;

const SectionText = styled.input`
	width: 620.58px;
	height: 27px;
	border-radius: 5px;
	border: none;
	background-color: #b1b1b1;
	color: white;
`;

const SectionH = styled.h3`
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	margin-right: 10px;
`;

const SectionTopItem = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	height: 200px;
`;

const SectionCenterItem = styled.div`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	text-align: center;
`;

const SectionBottomItem = styled.div`
	display: flex;
	margin-top: 20px;
	flex-direction: column;
`;
const SectionBottomItemTitle = styled.div`
	display: flex;
	width: 1000px;
	justify-content: space-between;
`;

export default function MiniContainer() {
	return (
		<>
			<Header>헤더</Header>
			<div>
				<SectionContiner>
					<SectionLeft>
						<Profile />
					</SectionLeft>
					<SectionCenter>
						<SectionTopItem>
							<SectionH>Git 주소</SectionH>
							<SectionText />
						</SectionTopItem>
						<SectionCenterItem>
							<h3>내가 쓴 글</h3>
							<div>내가 쓴글 리스트</div>
						</SectionCenterItem>
						<SectionBottomItem>
							<SectionBottomItemTitle>
								<h3>일촌</h3>
								<p>더보기</p>
							</SectionBottomItemTitle>
							<div>일촌 목록</div>
						</SectionBottomItem>
					</SectionCenter>
					<SideDiv>오른쪽</SideDiv>
				</SectionContiner>
			</div>
			<Footer>footer</Footer>
		</>
	);
}
