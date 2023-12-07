import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { axiosGet } from '../../Utils/AxiosUtils';
import { useRecoilState } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';
import { useNavigate, Link } from 'react-router-dom';

const SectionContiner = styled.div`
	// width: 93%;
	// margin-left: 2rem;
	border-left: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 1rem;
	border-right: 1px solid rgba(255, 255, 255, 0.2);
	// margin-right: 1rem;
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	height: 100%;
	color: white;
`;

const Wapperdiv = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-left: 1rem;
`;

const SectionText = styled.input`
	width: 30rem;
	height: 27px;
	border-radius: 5px;
	border: none;
	background-color: #b1b1b1;
	color: white;
	cursor: pointer;
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
	height: 100px;
`;
const SectionTopSubItem = styled.div``;
const SectionTopSubHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 0 2rem;
`;
const SectionCenterItem = styled.div`
	width: 100%;
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
const UserPostsDiv = styled.div`
	width: 12rem;
	height: 15rem;
	border: 1px solid white;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
`;
const PostsImg = styled.div`
	width: 100%;
	height: 10rem;
	box-sizing: border-box;
	background-size: cover;
	border-radius: 1rem 1rem 0 0;
`;
const NoPosts = styled.div`
	border: 0.1rem solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
	width: 50%;
	margin: 0 auto;
`;
const list = Array.from({ length: 3 });

const arr = Array.from({ length: 6 });

export default function MiniContainer() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useRecoilState(myInfo);
	const [neighbors, setNeighbor] = useState(undefined);
	const [userPosts, setUserPosts] = useState();

	const fetchClickedUserInfo = async userId => {
		navigate('/homepage/' + userId);
		const res = await axiosGet('/member/' + userId);
		setUserInfo({ ...res.data });
		await getNeighborList({ ...res.data });
	};

	useEffect(() => {
		(async () => {
			const res = await axiosGet('/member/my-info');
			console.log(res);
			setUserInfo({ ...res.data });
			await getNeighborList({ ...res.data });
		})();
	}, [setUserInfo]);

	useEffect(() => {
		(async () => {
			await fetchHomePageUsersPost();
		})();
	}, [neighbors]);

	const fetchHomePageUsersPost = async () => {
		const path = window.location.pathname.toLowerCase();
		const userId = path === '/minimain' ? userInfo.id : path.split('/')[2];
		const res = await axiosGet(`/homepage/post/${userId}`);
		setUserPosts([...res.data]);
	};

	const getNeighborList = async userInfo => {
		const res = await axiosGet(`/neighbor/${userInfo.id}`);
		setNeighbor([...res.data]);
	};

	return (
		<SectionContiner>
			<Wapperdiv>
				<SectionTopItem>
					<SectionH>Git 주소</SectionH>
					<SectionText
						value={userInfo && userInfo.github ? userInfo.github : ''}
						onClick={() => {
							if (userInfo.github) window.open(userInfo.github);
						}}
					/>
				</SectionTopItem>
				<SectionTopSubItem>
					<SectionTopSubHeader>
						<h3>방명록</h3>
						<h5 style={{ cursor: 'pointer' }} onClick={() => navigate('/Guest')}>
							더 보기
						</h5>
					</SectionTopSubHeader>
				</SectionTopSubItem>
				<SectionCenterItem>
					<h3>내가 쓴 글</h3>
					<div>
						<div>내가 쓴글 리스트</div>
						<br />
					</div>
				</SectionCenterItem>
				<SectionBottomItem>
					<SectionBottomItemTitle>
						<h3>일촌</h3>
						<p style={{ cursor: 'pointer' }} onClick={() => navigate('/Friend')}>
							더보기
						</p>
					</SectionBottomItemTitle>
					<ImageContainerdiv>
						{neighbors && (
							<>
								{neighbors.map(i => (
									<Imagediv
										onClick={async () => {
											await fetchClickedUserInfo(i.memberId);
										}}
									>
										<SectionMainImg key={Math.random()} />
										{i.name}
									</Imagediv>
								))}
							</>
						)}
					</ImageContainerdiv>
				</SectionBottomItem>
			</Wapperdiv>
		</SectionContiner>
	);
}
