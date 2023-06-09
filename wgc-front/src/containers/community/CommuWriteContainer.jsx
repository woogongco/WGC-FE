import React, { useState } from 'react';
import styled from 'styled-components';
import Header from 'components/header/Header';
import Profile from 'componentss/profile/Profile';
import Footer from 'components/footer/Footer';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';

const Section = styled.div`
	display: flex;
`;
const WriteInterface = styled.div`
	width: 55%;
	padding: 5rem 0 0 0.5rem;
	border-left: 0.5px solid white;
`;
const Title = styled.div`
	color: white;
	font-size: 24px;
	margin-bottom: 1rem;
`;
const Select = styled.select`
	border: 0.5px solid #767272;
	background-color: transparent;
	border-radius: 5px;
	color: white;
	margin-bottom: 1rem;
`;
const ContentDiv = styled.div`
	margin-bottom: 1rem;
`;

const ContentInput = styled.input`
	color: white;
	width: 830px;
	height: 39px;
	background-color: transparent;
`;
const EditorDiv = styled.div`
	color: white;
	width: 830px;
`;
const PostButtonDiv = styled.div`
	float: right;
	margin-top: 2rem;
`;
const PostButton = styled.button`
	background-color: #dd9197;
	height: 35px;
	width: 185px;
	border: 0;
	border-radius: 50px;
	cursor: pointer;
`;
export default function CommuWriteContainer() {
	const [CommunityType, setCommunityType] = useState('');
	const handleType = e => {
		setCommunityType(e.target.value);
	};
	const handleInputLength = e => {
		if (e.target.value.length > 50) {
			e.target.value = e.target.value.substr(0, 50);
		}
	};
	const PostType = () => {
		const result = [];
		['자유 게시판', '스터디 게시판', '인기글', '취업 게시판', 'IT 뉴스', '나의 프로젝트'].forEach(
			e => {
				result.push(<option value={e}>{e}</option>);
			},
		);
		return result;
	};

	return (
		<>
			<Header />
			<Section>
				<Profile />
				<WriteInterface>
					<Title>작성페이지</Title>
					<Select value={CommunityType} onChange={handleType}>
						{PostType()}
					</Select>
					<ContentDiv>
						<ContentInput
							type="text"
							placeholder="최대 50글자 까지 입력 가능합니다."
							onChange={handleInputLength}
						/>
					</ContentDiv>
					<EditorDiv>
						<Editor
							previewStyle="vertical"
							height="400px"
							initialEditType="wysiwyg"
							useCommandShortcut={false}
							placeholder="최대 5000글자 까지 입력 가능합니다."
							initialValue=" "
							language="ko-KR"
							plugins={[colorSyntax]}
						/>
					</EditorDiv>
					<PostButtonDiv>
						<PostButton type="button">글쓰기</PostButton>
					</PostButtonDiv>
				</WriteInterface>
			</Section>
			<Footer />
		</>
	);
}
