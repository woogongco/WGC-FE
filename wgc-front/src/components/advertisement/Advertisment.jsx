import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
	position: absolute;
	top: 0%;
	height: 100vh;
	right: 0%;
	float: right;
	width: 20%;

	background-color: green;
`;

export default function Advertisment() {
	return (
		<>
			<Base>오른쪽 영역</Base>
		</>
	);
}
