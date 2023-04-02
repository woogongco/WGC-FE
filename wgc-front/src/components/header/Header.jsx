import React from 'react';
import styled from 'styled-components';
import Logoimg from 'assets/logo-img.png';
const HeaderLayOut = styled.div`
	background-color: #2e2e2e;
	display: flex;
	justify-content: space-between;
`;

export default function Header() {
	<HeaderLayOut>
		<img src={Logoimg} alt="Header Logo img" />
	</HeaderLayOut>;
}
