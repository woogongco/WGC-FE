import MiniMainPage from 'pages/mini/MiniMainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendPage from 'pages/mini/FriendPage';
import MyPostPage from 'pages/mini/MyPostPage';
import GuestPage from 'pages/mini/GuestPage';
import LoginMainPage from 'pages/login/LoginMainPage';
import UserSignPage from 'pages/login/UserSignPage';
import PwFindPage from 'pages/login/PwFindPage';
import EmailLoginPage from 'pages/login/EmailLoginPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/LoginMain" element={<LoginMainPage />}>
					메인 로그인페이지
				</Route>
				<Route path="/UserSign" element={<UserSignPage />}>
					회원가입 페이지
				</Route>
				<Route path="/PwFindContainer" element={<PwFindPage />}>
					비밀번호찾기 페이지
				</Route>
				<Route path="EmailLogin" element={<EmailLoginPage />}>
					이메일 로그인 페이지
				</Route>
				<Route path="/MiniMain" element={<MiniMainPage />}>
					미니홈피메인페이지
				</Route>
				<Route path="/Friend" element={<FriendPage />}>
					일촌 목록 페이지
				</Route>
				<Route path="MyPost" element={<MyPostPage />}>
					나의 게시글 페이지
				</Route>
				<Route path="Guest" element={<GuestPage />}>
					방명록
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
