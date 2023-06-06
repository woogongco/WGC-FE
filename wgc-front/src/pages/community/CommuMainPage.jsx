import React from 'react';
import CommuMainContainer from 'containers/community/CommuMainContainer';
import styled from 'styled-components';

const AdTop = styled.div`
	width: 95%;
	min-height: 72px;
	background-color: aliceblue;
	margin: 3em auto 3em;
`;

export default function CommuMainPage() {
	return (
		<>
			<AdTop />
			<CommuMainContainer />
		</>
	);
}
