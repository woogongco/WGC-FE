import React from 'react';
import styled from 'styled-components';

const SectionContiner = styled.div`
	width: 95%;
	margin-left: 2rem;
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.2);
	margin-right: 1rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	height: 100%;
	color: white;
`;

const Wapperdiv = styled.div`
	height: 100%;
`;

const SectionText = styled.input`
	width: 593px;
	height: 27px;
	border-radius: 5px;
	border: none;
	background-color: #b1b1b1;
	color: white;
`;

const SectionH = styled.h3`
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	margin-right: 10px;
`;

const SectionTopItem = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	height: 200px;
`;

const SectionCenterItem = styled.div`
	width: 100%;
	height: 300px;
`;

const SectionBottomItem = styled.div`
	display: flex;

	flex-direction: column;
`;
const SectionBottomItemTitle = styled.div`
	display: flex;
	width: 95%;

	justify-content: space-between;
`;

const Imagediv = styled.div`
	width: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ImageContainerdiv = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	margin-bottom: 26px;
`;

const SectionMainImg = styled.div`
	width: 90px;
	height: 90px;
	background-color: aliceblue;

	border-radius: 360%;
	margin-right: 3%;
`;

const list = Array.from({ length: 3 });

const arr = Array.from({ length: 6 });

export default function MiniContainer() {
	return (
		<>
			<SectionContiner>
				<Wapperdiv>
					<SectionTopItem>
						<SectionH>Git 주소</SectionH>
						<SectionText />
					</SectionTopItem>
					<SectionCenterItem>
						<h3>내가 쓴 글</h3>
						<div>
							<div>내가 쓴글 리스트</div>
						</div>
					</SectionCenterItem>
					<SectionBottomItem>
						<SectionBottomItemTitle>
							<h3>일촌</h3>
							<p>더보기</p>
						</SectionBottomItemTitle>
						<ImageContainerdiv>
							{arr.map((value, idx) => (
								<Imagediv>
									<SectionMainImg key={idx} />
									박진현
								</Imagediv>
							))}
						</ImageContainerdiv>
					</SectionBottomItem>
				</Wapperdiv>
			</SectionContiner>
		</>
	);
}
