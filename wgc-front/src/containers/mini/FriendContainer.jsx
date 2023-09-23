import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { axiosGet } from '../../Utils/AxiosUtils';
import { useRecoilValue } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';
import { Button } from 'antd';

const WarrperDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 90%;
	margin-left: 3%;
	align-items: center;
`;

const SectionContiner = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
`;

const SectionItemTitle = styled.div`
	display: flex;
	color: white;
	font-style: normal;
	font-weight: 600;
	font-size: 2rem;
	line-height: 2rem;
	margin-left: 1rem;
	width: 80%;
	justify-content: flex-start;
`;

const SectionMainItem = styled.div`
	display: flex;
	height: 12%;
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const SectionMainImg = styled.div`
	width: 8%;
	background-color: aliceblue;
	border-radius: 360%;
	height: 90%;
	margin-right: 3%;
`;

const SectionMainTextContainer = styled.div`
	color: white;
	margin-left: 1rem;
	width: 100%;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	border-bottom: 0.1em solid rgba(255, 255, 255, 0.2);
`;

const SectionButton = styled.button`
	color: white;
	background-color: #2e2e2e;
	width: 7vw;
	height: 5vh;
	border-radius: 0.5em;
	border: none;
	margin-left: 10px;
	float: right;
`;

const SectionButtonDiv = styled.div`
	margin-left: auto;
`;

// const Item = ({ children, isLastItem, onFetchMorePassengers }) => {
// 	const [action, setAction] = useState(false);
// 	const ref = useRef(null); // 감시할 엘리먼트
// 	const entry = useIntersectionObserver(ref, {});
// 	const isIntersecting = !!entry?.isIntersecting; // 겹치는 영역이 존재하는 지 여부
// 	useEffect(() => {
// 		isLastItem && isIntersecting && onFetchMorePassengers(); // 목록의 마지막에 도달했을 때, 리스트를 더 불러오도록 요청한다.
// 	}, [isLastItem, isIntersecting]);
//
// 	return (
// 		<SectionMainTextContainer
// 			ref={ref}
// 			style={{
// 				minHeight: '10vh',
// 			}}
// 		>
// 			<SectionMainImg />
// 			<div style={{ margin: 'auto' }}>{children}</div>
// 			<SectionButtonDiv>
// 				<SectionButton>수락</SectionButton>
// 				<SectionButton>제거</SectionButton>
// 			</SectionButtonDiv>
// 		</SectionMainTextContainer>
// 	);
// };

export default function FriendContainer() {
	const [data, setData] = useState([]);
	const [didmount, setDidmount] = useState(false);
	const [passengers, setPassengers] = useState([]);
	const [neighbors, setNeighbors] = useState(undefined);
	const [page, setPage] = useState(0);
	const [isLast, setIsLast] = useState(false);
	const userInfo = useRecoilValue(myInfo);

	useEffect(() => {
		(async () => {
			await getNeighborList(userInfo);
		})();
	}, []);

	const getNeighborList = async userInfo => {
		const path = window.location.pathname.toLowerCase();
		const id = path === '/friend' ? userInfo.id : path.split('/')[2];
		if (!id) return;
		const res = await axiosGet(`/neighbor/${id}`);
		console.log(res.data);
		setNeighbors([...res.data]);
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const ref = useRef(null); // 감시할 엘리먼트
	const buttonStyle = {
		color: 'white',
		backgroundColor: '#2e2e2e',
		width: '7vw',
		height: '5vh',
		borderRadius: '0.5em',
		border: 'none',
		marginLeft: '10px',
		float: 'right',
	};

	const changeStatus = async (action, neighbor) => {
		console.log(action);
		console.log(neighbor);
	};

	return (
		<SectionContiner>
			<WarrperDiv>
				<SectionItemTitle>
					<p>일촌 목록</p>
				</SectionItemTitle>
				<SectionMainItem>
					일촌 목록
					{neighbors && (
						<>
							{neighbors
								.filter(i => i.accepted === 'Y')
								.map((i, index) => (
									<SectionMainTextContainer
										ref={ref}
										style={{
											minHeight: '10vh',
										}}
									>
										<SectionMainImg />
										<span>{i.name}</span>
										<div style={{ margin: 'auto' }}>
											<Button type="default" style={buttonStyle}>
												제거
											</Button>
											<Button
												type="primary"
												style={{ ...buttonStyle, backgroundColor: 'rgb(56,117,246)' }}
											>
												수락
											</Button>
										</div>
									</SectionMainTextContainer>
								))}
						</>
					)}
					<div
						style={{ border: '1px solid red', width: '100%', height: '3px', marginTop: '15px' }}
					/>
					<span style={{ marginTop: '15px' }}>일촌 신청 목록</span>
					{neighbors && (
						<>
							{neighbors
								.filter(i => i.accepted !== 'Y')
								.map((i, index) => (
									<SectionMainTextContainer
										ref={ref}
										style={{
											minHeight: '10vh',
										}}
									>
										<SectionMainImg />
										<span>{i.name}</span>
										<div style={{ margin: 'auto' }}>
											<Button type="default" style={buttonStyle}>
												제거
											</Button>
											<Button
												type="primary"
												style={{ ...buttonStyle, backgroundColor: 'rgb(56,117,246)' }}
											>
												수락
											</Button>
										</div>
									</SectionMainTextContainer>
								))}
						</>
					)}
				</SectionMainItem>
			</WarrperDiv>
		</SectionContiner>
	);
}
