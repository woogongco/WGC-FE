import React from 'react';

import Profile from 'components/profile/Profile';
import Header from 'components/header/Header';
import Advertisment from 'components/advertisement/Advertisment';
import Footer from 'components/footer/Footer';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const HeaderHtml = styled.header``;

const AsideHtmlLeft = styled.aside`
	width: 20%;
`;

const SectionHtml = styled.main`
	position: absolute;
	top: 11%;
	left: 20%;
	width: 70%;
`;

const AsideHtmlRight = styled.aside`
	position: absolute;
	right: 0px;
	top: 100px;
	width: 10%;
	background-color: blue;
	height: 100vh;
`;
const FooterHtml = styled.footer``;

export default function Layout() {
	return (
		<>
			<HeaderHtml>
				<Header />
			</HeaderHtml>
			<AsideHtmlLeft>
				<Profile />
			</AsideHtmlLeft>
			<SectionHtml>
				<Outlet />
			</SectionHtml>
			<AsideHtmlRight>
				<Advertisment />
			</AsideHtmlRight>
			<FooterHtml>
				<Footer />
			</FooterHtml>
		</>
	);
}
