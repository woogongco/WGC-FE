import MiniMainPage from 'pages/mini/MiniMainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FriendPage from 'pages/mini/FriendPage';
import MyPostPage from 'pages/mini/MyPostPage';
import GuestPage from 'pages/mini/GuestPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
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
