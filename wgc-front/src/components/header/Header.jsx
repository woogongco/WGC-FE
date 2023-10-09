import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import Logoimg from 'assets/logo-img.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaBookmark, FaSearch, FaUserAlt } from 'react-icons/fa';
import Modal from 'components/Modal/Modal';
import { useRecoilState } from 'recoil';
import { themeMode } from '../../store/RecoilStates/Theme';

const HeaderLayOut = styled.div`
	// background-color: #2e2e2e;
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
	// background-color: #51545c;
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
	color: white;
`;
const ButtonBar = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style: none;
	margin: 0;
	align-items: center;
`;
const Buttonli = styled.li`
	color: #ababab;
	margin-right: 20px;
	cursor: pointer;
	align-items: center;
`;
const ToggleBtn = styled.div`
	width: 3rem;
	height: 1.1rem;
	border-radius: 2.5rem;
	border: 0px;
	position: relative;
	cursor: pointer;
	display: block;
	background-color: white;
`;
const ToggleSwitch = styled.input`
	height: 0.8rem;
	background-color: #c98c91;
	width: 0.8rem;
	border-radius: 50%;
	border: 1px soild black;
	appearance: none;
	position: absolute;
	transition: 300ms;
	cursor: pointer;
	&:checked {
		border-radius: 50%;
		transform: translateX(30px);
	}
`;
const Darklight = styled.span`
	font-size: 5px;
`;
const LoginBtn = styled.div`
	cursor: pointer;
	border: 1px solid black;
	background-color: #121212;
	text-align: center;
	width: 74px;
	height: 24px;
	border-radius: 5px;
	color: white;
	font-size: 12px;
`;
const NavbarLink = styled(Link)`
	&:visited,
	&:hover,
	&:focus {
		color: #ababab;
	}
	:active {
		color: #ababab;
	}
`;

export default function Header() {
	const [darkMode, setDarkMode] = useRecoilState(themeMode);
	const navigate = useNavigate();
	const [onModal, clsoeModal] = useState(false);
	const [checked, setchecked] = useState(false);

	const HandleChecked = useCallback(() => {
		setchecked(e => !e);
		setDarkMode(e => !e);
	}, []);

	const HandleLogoPage = () => {
		localStorage.getItem('token') ? navigate('/Minimain') : navigate('/');
	};
	const HandleModal = useCallback(() => {
		clsoeModal(prev => !prev);
	}, []);
	return (
		<div>
			<HeaderLayOut>
				<div onClick={HandleLogoPage}>
					<LogoImage src={Logoimg} alt="Header Logo img" />
				</div>
				<SearchBar>
					<SerchIcon>
						<FaSearch />
					</SerchIcon>
					<SearchInput type="text" placeholder="Search..." />
				</SearchBar>
				<ButtonBar>
					{localStorage.getItem('token') ? (
						<>
							<Buttonli onClick={HandleModal}>
								<FaBell />
							</Buttonli>
							{onModal ? <Modal /> : ''}
							<Buttonli>
								<NavbarLink to="/">
									<FaBookmark />
								</NavbarLink>
							</Buttonli>
							<Buttonli>
								<NavbarLink to="/UserInfo">
									<FaUserAlt />
								</NavbarLink>
							</Buttonli>
						</>
					) : (
						<Buttonli>
							<Link to="/">
								<LoginBtn>로그인</LoginBtn>
							</Link>
						</Buttonli>
					)}
					<Buttonli onClick={HandleChecked}>
						<ToggleBtn>
							<ToggleSwitch type="checkbox" checked={checked} />
						</ToggleBtn>
						{checked === false ? (
							<Darklight>Dark Mode</Darklight>
						) : (
							<Darklight>Light Mode</Darklight>
						)}
					</Buttonli>
				</ButtonBar>
			</HeaderLayOut>
		</div>
	);
}
