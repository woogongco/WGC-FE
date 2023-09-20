import React from 'react';
import styled from 'styled-components';
import { FaBell } from 'react-icons/fa';
const Wrapper = styled.div`
	width: 5rem;
	border: 0.1px solid grey;
	background-color: #d7d7d7;
	border-radius: 10px;
	position: fixed;
	z-index: 1022;
	left: 85%;
	top: 7%;
	padding: 1rem;
`;
const AlertDiv = styled.div`
	color: #565656;
	display: flex;
	justify-content: center;
	gap: 0.5rem;
	font-size: 13px;
`;
//API 나와야함
export default function Modal({ show, onCloseMoad }) {
	return (
		<Wrapper>
			<AlertDiv>
				<FaBell className="Icons_Bell" />
				<span>알람목록</span>
			</AlertDiv>
		</Wrapper>
	);
}
