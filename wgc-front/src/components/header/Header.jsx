import React from 'react';
import styled from 'styled-components';
import Logoimg from 'assets/logo-img.png';
import { FaSearch, FaBell, FaUserAlt, FaBookmark, FaToggleOn } from 'react-icons/fa';
const HeaderLayOut = styled.div`
	background-color: #2e2e2e;
	display: flex;
	height: 64px;
	justify-content: space-between;
	align-items: center;
`;
const LogoImage = styled.img`
	width: 100px;
	height: 44px;
	margin-left: 1rem;
	cursor: pointer;
`;
const SearchBar = styled.div`
	border: 1px solid #c98c91;
	padding-left: 1rem;
	background-color: #51545c;
	width: 650px;
	height: 32px;
	border-radius: 8px;
`;
const SerchIcon = styled.span`
	color: white;
`;
const SearchInput = styled.input`
	background-color: transparent;
	margin-left: 1rem;
	height: 32px;
	width: 500px;
	outline: none;
	border: 0px;
`;
const ButtonBar = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin: 0;
`;
const Buttonli = styled.li`
	color: #ababab;
	margin-right: 20px;
	cursor: pointer;
`;

export default function Header1() {
	return (
		<>
			<HeaderLayOut>
				<LogoImage src={Logoimg} alt="Header Logo img" />
				<SearchBar>
					<SerchIcon>
						<FaSearch />
					</SerchIcon>
					<SearchInput type="text" placeholder="Search..." />
				</SearchBar>
				<ButtonBar>
					<Buttonli>
						<FaBell />
					</Buttonli>
					<Buttonli>
						<FaBookmark />
					</Buttonli>
					<Buttonli>
						<FaUserAlt />
					</Buttonli>
					<Buttonli>
						<FaToggleOn />
					</Buttonli>
				</ButtonBar>
			</HeaderLayOut>
			;
		</>
	);
}
