import React from 'react';

import Profile from 'components/profile/Profile';
import Header from 'components/header/Header';
import Advertisment from 'components/advertisement/Advertisment';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const HeaderHtml = styled.header``;

const AsideHtmlLeft = styled.aside`
	width: 35%;
	margin-left: 2em;
`;

const SectionWrapperHtml = styled.section`
	display: flex;
`;

const SectionHtml = styled.main`
	//position: absolute;
	display: flex;
	//top: 11%;
	//left: 20%;
	width: 100%;
	height: 100%;
	//border-left: 1px solid rgba(255, 255, 255, 0.2);
	//border-right: 1px solid rgba(255, 255, 255, 0.2);
	//border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const SectionDiv = styled.div`
	width: 96%;
`;
const AsideHtmlRight = styled.aside`
	//position: absolute;
	//right: 0px;
	//top: 100px;
	min-width: 173px;
	margin: 2em 1em;
	//width: 10%;
	background-color: blue;
`;
const FooterHtml = styled.footer`
	margin-top: 2em;
`;

export default function Layout() {
	return (
		<>
			<HeaderHtml>
				<Header />
			</HeaderHtml>
			<SectionWrapperHtml>
				<AsideHtmlLeft>
					<Profile />
				</AsideHtmlLeft>
				<SectionHtml>
					<SectionDiv>
						<Outlet />
					</SectionDiv>
					<Navbar />
				</SectionHtml>
				<AsideHtmlRight>
					<Advertisment />
				</AsideHtmlRight>
			</SectionWrapperHtml>
			<FooterHtml>
				<Footer />
			</FooterHtml>
		</>
	);
}
