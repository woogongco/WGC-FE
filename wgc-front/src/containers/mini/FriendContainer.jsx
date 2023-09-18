import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getFriendQuerStringText } from 'apis/api';
import axios from 'axios';
import useIntersectionObserver from 'constants/InifiniScrolll/useIntersectionObserver';
import { axiosGet } from '../../Utils/AxiosUtils';
import { useRecoilValue } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';

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
	height: 80%;
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
	width: 5vw;
	height: 5vh;
	border-radius: 0.5em;
	border: none;
`;

const SectionButtonDiv = styled.div`
	margin-left: auto;
`;

const Item = ({ children, isLastItem, onFetchMorePassengers }) => {
	const ref = useRef(null); // 감시할 엘리먼트
	const entry = useIntersectionObserver(ref, {});
	const isIntersecting = !!entry?.isIntersecting; // 겹치는 영역이 존재하는 지 여부
	useEffect(() => {
		isLastItem && isIntersecting && onFetchMorePassengers(); // 목록의 마지막에 도달했을 때, 리스트를 더 불러오도록 요청한다.
	}, [isLastItem, isIntersecting]);

	return (
		<SectionMainTextContainer
			ref={ref}
			style={{
				minHeight: '10vh',
			}}
		>
			<SectionMainImg />
			<div style={{ margin: 'auto' }}>{children}</div>
			<SectionButtonDiv>
				<SectionButton>일촌 끊기</SectionButton>
			</SectionButtonDiv>
		</SectionMainTextContainer>
	);
};

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
		console.log('getNeighborList userInfo = ', userInfo);
		const path = window.location.pathname.toLowerCase();
		const id = path === '/friend' ? userInfo.id : path.split('/')[2];
		if (!id) return;
		const res = await axiosGet(`/neighbor/${id}`);
		setNeighbors([...res.data]);
	};

	async function renderFirend(page) {
		const getFriendData = await getFriendQuerStringText(page);
		setData(getFriendData);
	}

	const getPassengers = async () => {
		const params = { size: 10, page, limit: 5 };
		try {
			const res = await axios.get('https://api.instantwebtools.net/v1/passenger', { params });
			const passengers = res.data.data;
			const isLast = res.data.totalPages === page;
			setPassengers(prev => [...prev, ...passengers]);
			setIsLast(isLast);
		} catch (e) {
			console.error(e);
		}
	};
	// useEffect(() => {
	// !isLast && getPassengers();
	// }, [page]);

	// useEffect(() => {
	// 	if (didmount) {
	// 		renderFirend();
	// 	}
	// }, [didmount]);

	return (
		<SectionContiner>
			<WarrperDiv>
				<SectionItemTitle>
					<p>일촌 목록</p>
				</SectionItemTitle>
				<SectionMainItem>
					{neighbors && (
						<>
							{neighbors.map((i, index) => (
								<Item
									key={Math.random()}
									isLastItem={neighbors.length - 1 === index}
									onFetchMorePassengers={() => setPage(prev => prev + 1)}
								>
									{i.name}
								</Item>
							))}
						</>
					)}
					{/*{passengers &&*/}
					{/*	passengers.map((passenger, idx) => (*/}
					{/*		<Item*/}
					{/*			key={passenger._id}*/}
					{/*			isLastItem={passengers.length - 1 === idx}*/}
					{/*			onFetchMorePassengers={() => setPage(prev => prev + 1)}*/}
					{/*		>*/}
					{/*			{passenger.name}*/}
					{/*		</Item>*/}
					{/*	))}*/}
				</SectionMainItem>
			</WarrperDiv>
		</SectionContiner>
	);
}
