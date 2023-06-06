import React from 'react';
import styled from 'styled-components';
import Subtract from '../../assets/Subtract.png';
import SubtractOpen from '../../assets/Subtract_open.png';

const NavHtml = styled.nav`
	display: block;
	width: 50px;
	height: 394px;
	position: absolute;
	right: 8%;
	top: 20%;
	background-image: url(${Subtract});
	background-repeat: no-repeat;

	ul {
		list-style: none;
		position: fixed;
		width: 50px;
		display: none;
	}
	:hover {
		background-image: url(${SubtractOpen});
		background-repeat: no-repeat;
		margin: 0;
		width: 50px;
		background-position: left center;
		ul {
			top: 0;
			right: 0;
			margin-left: 0;
			position: absolute;
			display: inline;
		}
	}
`;

export default function Navbar() {
	return (
		<NavHtml>
			<ul>
				<li>메뉴1</li>
				<li>메뉴2</li>
				<li>메뉴3</li>
				<li>메뉴4</li>
				<li>메뉴5</li>
			</ul>
		</NavHtml>
	);
}
