import MiniMainPage from 'pages/mini/MiniMainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//mini
import FriendPage from 'pages/mini/FriendPage';
import MyPostPage from 'pages/mini/MyPostPage';
import GuestPage from 'pages/mini/GuestPage';
import WriteModifyPage from 'pages/mini/WriteModifyPage';

//login
import LoginMainPage from 'pages/login/LoginMainPage';
import UserSignPage from 'pages/login/UserSignPage';
import PwFindPage from 'pages/login/PwFindPage';
import EmailLoginPage from 'pages/login/EmailLoginPage';

//comunity
import CommuMainPage from 'pages/community/CommuMainPage';
import Profile from 'components/profile/Profile';
import BoardPage from 'pages/community/BoardPage';
import UserInfo from 'pages/userinfo/UserInfoPage';
import CommuWritePage from './pages/community/CommuWritePage';

//공통
import Layout from 'components/layouts/Layout';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
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
		</RecoilRoot>
	);
}

export default App;
