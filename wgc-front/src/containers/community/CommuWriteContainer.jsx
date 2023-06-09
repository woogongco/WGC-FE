import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
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
	const [InputText, ChangeInputText] = useInput('');
	const editorRef = useRef();
	const handleType = e => {
		setCommunityType(e.target.value);
	};
	let typelist = ['자유 게시판', '취업 게시판', 'IT 뉴스', '스터디 게시판'];
	const PostType = () => {
		const result = [];

		typelist.forEach(e => {
			result.push(<option value={e}>{e}</option>);
		});
		return result;
	};
	const onSubmit = useCallback(
		e => {
			e.preventDefault();
			fetch('http://ec2-54-180-120-146.ap-northeast-2.compute.amazonaws.com/post', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: InputText,
					content: editorRef.current.getInstance().getMarkdown(),
					categoryId: typelist.indexOf(CommunityType) + 1,
				}),
			})
				.then(response => response.json())
				.catch(error => alert(error));
		},
		[InputText, CommunityType, typelist],
	);
	return (
		<div>
			<Section>
				<WriteInterface>
					<Title>작성페이지</Title>
					<Select value={CommunityType} onChange={handleType}>
						{PostType()}
					</Select>
					<ContentDiv>
						<ContentInput
							type="text"
							placeholder="최대 50글자 까지 입력 가능합니다."
							value={InputText}
							onChange={ChangeInputText}
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
							theme="dark"
							ref={editorRef}
						/>
					</EditorDiv>
					<PostButtonDiv>
						<PostButton type="button" onClick={onSubmit}>
							글쓰기
						</PostButton>
					</PostButtonDiv>
				</WriteInterface>
			</Section>
		</div>
	);
}
function useInput() {
	const [value, setValue] = useState('');
	const handler = useCallback(e => {
		setValue(e.target.value);
	}, []);
	return [value, handler, setValue];
}
