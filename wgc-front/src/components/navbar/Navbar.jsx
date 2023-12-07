import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Subtract from 'assets/Subtract.png';
import SubtractOpen from 'assets/Subtract_open.png';
import Subtract_open_Orange from 'assets/Subtract_open_Orange.png';
import Subtract_open_Blue from 'assets/Subtract_open_Blue.png';
import Subtract_open_Purple from 'assets/Subtract_open_Purple.png';
import Subtract_open_Red from 'assets/Subtract_open_Red.png';
import navfree from 'assets/nav_free.svg';
import navjob from 'assets/nav_job.svg';
import navnews from 'assets/nav_news.svg';
import navpop from 'assets/nav_pop.svg';
import navproject from 'assets/nav_project.svg';
import navstudy from 'assets/nav_study.svg';
import navsetting from 'assets/nav_setting.svg';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { myInfo } from 'store/RecoilStates/UserInfo';
const NavHtml = styled.nav`
	display: block;
	width: 50px;
	height: 394px;
	position: absolute;
	right: 12rem;
	top: 110px;
	background-image: url(${Subtract});
	background-repeat: no-repeat;

	ul {
		list-style: none;
		position: fixed;
		width: 50px;
		display: none;
	}
	:hover {
		background-image: url( ${props =>
			props.color === '#b3cad3'
				? Subtract_open_Orange
				: props.color === '#ffb548'
				? Subtract_open_Orange
				: props.color === '#5a0cff'
				? Subtract_open_Purple
				: props.color === '#ffb548'
				? Subtract_open_Blue
				: props.color === '#ff2a38'
				? Subtract_open_Red
				: ''});
		ffb548
		background-repeat: no-repeat;
		margin: 0;
		width: 50px;
		background-position: left center;
		transition: all 1s;
		ul {
			top: 0;
			right: 0;
			min-height: 350px;
			position: absolute;
			display: flex;
			flex-direction: column;

			li {
				margin: auto 10px;
				img {
					width: 24px;
					cursor: pointer;
				}
			}
			li::after {
				content: '';
				display: block;
				width: 10px;
				height: 1px;
				border-bottom: 1px solid #fff;
				margin: 0.8rem 8px;
			}
			li:last-child::after {
				display: none;
			}
		}
	}
`;

export default function Navbar() {
	const [isTextVisible, setTextVisibility] = useState(false);
	const navigate = useNavigate();
	const userInfo = useRecoilValue(myInfo);

	const handleMouseOver = () => {
		setTextVisibility(true);
	};

	const handleMouseOut = () => {
		setTextVisibility(false);
	};
	useEffect(() => {}, [userInfo]);
	return (
		<NavHtml color={userInfo.color}>
			<ul>
				{/*<li onClick={() => navigate(`/board/popular`)}>*/}
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate('/board/popular')}
				>
					{isTextVisible ? <span>인기</span> : <img src={navpop} alt="freeicon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate('/board/free')}
				>
					{/*<li onClick={() => navigate(`/board/free`)}>*/}
					{isTextVisible ? <span>자유</span> : <img src={navfree} alt="popicon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate(`/board/study`)}
				>
					{isTextVisible ? <span>스터디</span> : <img src={navstudy} alt="studyicon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate(`/board/job`)}
				>
					{isTextVisible ? <span>취업</span> : <img src={navjob} alt="freeicon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate(`/board/itnews`)}
				>
					{isTextVisible ? <span>IT</span> : <img src={navnews} alt="newsicon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate(`/board/project`)}
				>
					{isTextVisible ? <span>프로젝트</span> : <img src={navproject} alt="projecticon" />}
				</li>
				<li
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					onClick={() => navigate(`/UserInfo`)}
				>
					{isTextVisible ? <span>정보</span> : <img src={navsetting} alt="settingicon" />}
				</li>
			</ul>
		</NavHtml>
	);
}
