import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
	color: white;
	border-left: 1px solid white;
	width: 100%;
	height: 100%;
	background-color: blue;
`;

export default function Advertisment() {
	return (
		<>
			<Base>오른쪽 영역</Base>
		</>
	);
}
