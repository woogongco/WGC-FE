import React from 'react';
import styled from 'styled-components';
import BoardPreview from '../../components/boardPreview/BoardPreview';
import Header from '../../components/header/Header';

const Wrapper = styled.div`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(2, 1fr);
	gap: 62px 18px;
	color: #fff;
`;

export default function CommuMainContainer() {
	return (
		<>
			<Header />
			{/*<Profile /> */}
			<Wrapper>
				{/* 게시판 리스트 */}
				<BoardPreview />
			</Wrapper>
			{/* <Footer /> */}
		</>
	);
}
