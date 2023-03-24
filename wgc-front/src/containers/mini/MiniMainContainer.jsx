import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	background-color: blue;
`;

const Nav = styled.nav`
	background-color: red;
	float: left;
`;
const Section = styled.section`
	text-align: center;
`;

const Aside = styled.aside`
	background-color: yellow;
	float: right;
`;

const Footer = styled.footer`
	position: absolute;
	bottom: 0;
	left: 0;
`;

const SectionContiner = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	flex-direction: column;
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
	center: center;
	align-items: center;
	justify-content: center;
`;

const SectionCenterItem = styled.div``;

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
			<Nav>왼쪽</Nav>
			<Section>
				<SectionContiner>
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
							<h3>더보기</h3>
						</SectionBottomItemTitle>
						<div>일촌 목록</div>
					</SectionBottomItem>
				</SectionContiner>
			</Section>
			<Aside>오른쪽</Aside>
			<Footer>footer</Footer>
		</>
	);
}
