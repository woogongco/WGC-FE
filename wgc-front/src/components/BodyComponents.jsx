import { ConfigProvider, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import LoginMainPage from '../pages/login/LoginMainPage';
import UserSignPage from '../pages/login/UserSignPage';
import PwFindPage from '../pages/login/PwFindPage';
import EmailLoginPage from '../pages/login/EmailLoginPage';
import FriendPage from '../pages/mini/FriendPage';
import MiniMainPage from '../pages/mini/MiniMainPage';
import GuestPage from '../pages/mini/GuestPage';
import MyPostPage from '../pages/mini/MyPostPage';
import WriteModifyPage from '../pages/mini/WriteModifyPage';
import CommuMainPage from '../pages/community/CommuMainPage';
import BoardPage from '../pages/community/BoardPage';
import CommuWritePage from '../pages/community/CommuWritePage';
import UserInfo from '../pages/userinfo/UserInfoPage';
import Profile from './profile/Profile';
import { useRecoilValue } from 'recoil';
import { themeMode } from '../store/RecoilStates/Theme';
import '@ant-design/cssinjs';
import { useEffect } from 'react';

const BodyComponents = () => {
	const themeSet = useRecoilValue(themeMode);

	useEffect(() => {
		//FIXME : ConfigProvider 에러 해결해야함.
		const tags = document.getElementsByTagName('*');
		for (const tag of tags) tag.style.color = themeSet ? 'black' : 'white';
	}, [themeSet]);
	return (
		<ConfigProvider
			theme={{
				algorithm: themeSet ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
		>
			<div
				style={{
					backgroundColor: themeSet ? 'rgb(250,250,250)' : 'rgb(25,25,25)',
					transition: '.5s',
					color: themeSet ? 'black' : 'white',
				}}
			>
				<BrowserRouter>
					<Routes>
						<Route path="/layout" element={<Layout />} />
						<Route path="/" element={<LoginMainPage />}>
							메인 로그인페이지
						</Route>
						<Route path="/UserSign" element={<UserSignPage />}>
							회원가입 페이지
						</Route>
						<Route path="/PwFindContainer" element={<PwFindPage />}>
							비밀번호찾기 페이지
						</Route>
						<Route path="/EmailLogin" element={<EmailLoginPage />}>
							이메일 로그인 페이지
						</Route>
						<Route element={<Layout />}>
							{/* 미니홈피 */}
							<Route path="/Friend" element={<FriendPage />} />
							<Route path="/Minimain" element={<MiniMainPage />} />
							<Route path="/Guest" element={<GuestPage />} />
							<Route path="/MyPost" element={<MyPostPage />} />
							<Route path="/board/:id" element={<WriteModifyPage />} />
							{/*  커뮤니티 */}
							<Route path="/community" element={<CommuMainPage />} />

							<Route path="/board/study" element={<BoardPage />} />
							<Route path="/board/popular" element={<BoardPage />} />
							<Route path="/board/free" element={<BoardPage />} />
							<Route path="/board/project" element={<BoardPage />} />
							<Route path="/board/itnews" element={<BoardPage />} />
							<Route path="/board/job" element={<BoardPage />} />
							<Route path="/write" element={<CommuWritePage />} />
							<Route path="/UserInfo" element={<UserInfo />} />
						</Route>
						<Route path="/Profile" element={<Profile />} />
					</Routes>
				</BrowserRouter>
			</div>
		</ConfigProvider>
	);
};

export default BodyComponents;
