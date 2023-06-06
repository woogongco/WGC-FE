import React from 'react';
import styled from 'styled-components';
import Subtract from '../../assets/Subtract.png';
import SubtractOpen from '../../assets/Subtract_open.png';
import navfree from '../../assets/nav_free.svg';
import navjob from '../../assets/nav_job.svg';
import navnews from '../../assets/nav_news.svg';
import navpop from '../../assets/nav_pop.svg';
import navproject from '../../assets/nav_project.svg';
import navstudy from '../../assets/nav_study.svg';
import navsetting from '../../assets/nav_setting.svg';
import { useNavigate } from 'react-router-dom';

const NavHtml = styled.nav`
	display: block;
	width: 50px;
	height: 394px;
	position: absolute;
	right: 170px;
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
		background-image: url(${SubtractOpen});
		background-repeat: no-repeat;
		margin: 0;
		width: 50px;
		background-position: left center;
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
	const navigate = useNavigate();

	// TODO 아이콘별 url path 수정 필요
	return (
		<NavHtml>
			<ul>
				<li onClick={() => navigate(`/`)}>
					<img src={navfree} alt="freeicon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navstudy} alt="studyicon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navpop} alt="popicon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navjob} alt="freeicon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navnews} alt="newsicon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navproject} alt="projecticon" />
				</li>
				<li onClick={() => navigate(`/`)}>
					<img src={navsetting} alt="settingicon" />
				</li>
			</ul>
		</NavHtml>
	);
}
