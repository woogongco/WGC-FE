import React from 'react';
import styled from 'styled-components';
import BoardPreview from '../../components/boardPreview/BoardPreview';

const Wrapper = styled.div`
	display: grid;
	width: 95%;
	height: 100%;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	gap: 62px 18px;
	color: #fff;
	margin: auto;
`;

export default function CommuMainContainer() {
	return (
		<Wrapper>
			{/* 게시판 리스트 */}
			<BoardPreview />
		</Wrapper>
	);
}
