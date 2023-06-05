import React from 'react';
import styled from 'styled-components';
import { HiOutlinePencil } from 'react-icons/hi';
import PostList from 'components/postList/PostList';

const Base = styled.div`
	height: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 29px;
	color: #ffffff;
`;

const TitleDiv = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
`;

const Button = styled.button`
	width: 109px;
	height: 35.71px;
	border-radius: 5px;
	border: none;
	margin-top: 40px;
`;

const MainDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 48%;
	justify-content: space-around;
	align-items: center;
`;
const TestDiv = styled.div`
	width: 228.43px;
	height: 282.05px;
	border: 1px solid white;
	border-radius: 10px;
	margin-top: 2%;
	&:nth-child(n + 4) {
		margin-top: 10%;
	}
`;

export default function MyPostContainer() {
	return (
		<Base>
			<TitleDiv>
				<Title>나의 게시글</Title>
				<Button>
					<HiOutlinePencil />
					작성하기
				</Button>
			</TitleDiv>
			<MainDiv>
				<PostList />
				{/* <TestDiv>1</TestDiv>
				<TestDiv>12</TestDiv>
				<TestDiv>13</TestDiv>
				<TestDiv>14</TestDiv>
				<TestDiv>15</TestDiv>
				<TestDiv>16</TestDiv> */}
			</MainDiv>
		</Base>
	);
}
