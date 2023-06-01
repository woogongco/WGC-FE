import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getFriendQuerStringText } from 'apis/api';
import axios from 'axios';
import useIntersectionObserver from 'constants/InifiniScrolll/useIntersectionObserver';

const WarrperDiv = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 2rem;
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.2);
	margin-right: 1rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
	width: 100%;
`;

const SectionMainItem = styled.div`
	display: flex;
	height: 12%;
	width: 90%;
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
	const [page, setPage] = useState(0);
	const [isLast, setIsLast] = useState(false);
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
	useEffect(() => {
		!isLast && getPassengers();
	}, [page]);
	useEffect(() => {
		setDidmount(true);
	}, []);

	useEffect(() => {
		if (didmount) {
			renderFirend();
		}
	}, [didmount]);

	return (
		<>
			<SectionContiner>
				<WarrperDiv>
					<SectionItemTitle>
						<p>일촌 목록</p>
					</SectionItemTitle>
					<SectionMainItem>
						{passengers &&
							passengers.map((passenger, idx) => (
								<Item
									key={passenger._id}
									isLastItem={passengers.length - 1 === idx}
									onFetchMorePassengers={() => setPage(prev => prev + 1)}
								>
									{passenger.name}
								</Item>
							))}
					</SectionMainItem>
				</WarrperDiv>
			</SectionContiner>
		</>
	);
}
