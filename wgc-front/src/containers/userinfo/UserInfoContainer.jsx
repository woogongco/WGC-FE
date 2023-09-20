import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { FaPen, FaPlusCircle } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';
import moment from 'moment/moment';
import { formDataPost, axiosPost } from 'Utils/AxiosUtils';
import useInput from 'constants/useInput';
import { useNavigate } from 'react-router-dom';
const Section = styled.div`
	display: flex;
`;
const UserInterface = styled.div`
	width: 55%;
	padding: 0.5rem 0 0 3rem;
	border-left: 0.5px solid white;
`;

const TitleContainer = styled.div`
	border-bottom: 1px solid #2e2e2e;
	margin-bottom: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: Semi-bold;
	color: #ffffff;
`;
const ChangeInfo = styled.button`
	border-radius: 5px;
	border: 0px;
	background-color: #fa9199;
	color: white;
	height: 35px;
	width: 109px;
	margin-left: 20px;
	font-weight: bold;
	font-size: 16px;
	cursor: pointer;
`;
const TypeContainer = styled.div`
	display: grid;
	margin-top: 40px;
	grid-template-columns: 7rem 20rem;
	grid-template-rows: 5rem 5rem 5rem 5rem 5rem 5rem 5rem 5rem;
	border-bottom: 1px solid #2e2e2e;
	width: 90%;
`;
const UserType = styled.span`
	color: white;
	font-size: 13px;
	margin-top: 0.7rem;
	text-align: center;
`;
const Content = styled.div`
	padding-left: 1rem;
	border-left: 1px solid #454545;
`;
const LogInfo = styled.div`
	color: #ffffff;
	border-radius: 5px;
	border: 1px solid #454545;
	padding: 0.5rem;
	font-size: 13px;
`;
const UserInput = styled.input`
	color: #ffffff;
	border: 1px solid #454545;
	border-radius: 5px;
	background-color: transparent;
	width: 95%;
	padding: 0.5rem 0 0.5rem 0.5rem;
	font-size: 13px;
`;
const ImgContainerDiv = styled.div`
	display: flex;
	gap: 3rem;
	align-items: center;
`;

const ImgContainer = styled.div`
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	width: 13rem;
	height: 13rem;
	background-size: cover;
`;

const ImgFileDiv = styled.div`
	position: relative;
	display: inline-block;
	margin: 1.5em 0 1.5em 15px;
	width: 13rem;
	height: 13rem;
	background: #c4c4c4;
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	cursor: pointer;
`;

const InputImg = styled.input`
	display: none;
`;

export default function UserInfoContainer() {
	const userInfo = useRecoilValue(myInfo);
	const [ImgSrc, setImgSrc] = useState('');
	const [Pngsrc, setPngsrc] = useState(userInfo.profile_image || '');
	const [GitUrl, setGitUrl] = useInput(userInfo.github || '');
	const [Introduce, setIntroduce] = useInput(userInfo.introduction || '');
	const ref = useRef();
	const navigate = useNavigate();
	const onUploadImg = async e => {
		const formData = new FormData(); // formData 생성
		formData.append('file', e.target.files[0]); // 이미지 파일 값 할당
		const rse = await formDataPost('/upload', formData);
		setPngsrc(rse.data);

		if (!e.target.files === undefined) return;
		const reader = new FileReader();
		if (e.target.files[0]) {
			reader.readAsDataURL(e.target.files[0]);
		}
		reader.onloadend = () => {
			const previewImgUrl = reader.result;
			setImgSrc(previewImgUrl);
		};
	};
	const onHandleRef = () => {
		ref.current.click();
	};
	const HandleGet = useCallback(async () => {
		const data = {
			profile_image: Pngsrc,
			github: GitUrl,
			introduction: Introduce,
		};
		const res = await axiosPost('/member/information', data);
		if (res.status === 200) {
			navigate('/MiniMain');
		}
	}, [Pngsrc, GitUrl, Introduce]);
	return (
		<div>
			{userInfo && (
				<Section>
					<UserInterface>
						<TitleContainer>
							<Title>회원수정</Title>
							<ChangeInfo onClick={HandleGet}>
								<FaPen />
								작성하기
							</ChangeInfo>
						</TitleContainer>
						<TypeContainer>
							<UserType>이름</UserType>
							<Content>
								<LogInfo>{userInfo.name}</LogInfo>
							</Content>
							<UserType>이메일</UserType>
							<Content>
								<LogInfo>{userInfo.mail}</LogInfo>
							</Content>
							<UserType>비밀번호</UserType>
							<Content>
								<UserInput type="password" />
							</Content>
							<UserType>비밀번호 확인</UserType>
							<Content>
								<UserInput type="password" />
							</Content>
							<UserType>가입일</UserType>
							<Content>
								<LogInfo>
									{moment(userInfo.registerDateTime).add(9, 'hours').format('YYYY-MM-DD hh:ss')}
									{/*{userInfo.registerDateTime}*/}
								</LogInfo>
							</Content>
							<UserType>연락처</UserType> {/*API 곧 나올예정*/}
							<Content>
								<UserInput type="text" placeholder="000-0000-0000" />
							</Content>
							<UserType>Git hub</UserType>
							<Content>
								<UserInput
									value={GitUrl}
									onChange={setGitUrl}
									type="text"
									placeholder="GitHub 주소를 입력해주세요"
								/>
							</Content>
							<UserType>자기소개</UserType>
							<Content>
								<UserInput
									value={Introduce}
									onChange={setIntroduce}
									type="text"
									placeholder="자기소개를 한줄로 표현해주세요."
								/>
							</Content>
						</TypeContainer>
						<Title>프로필 이미지</Title>
						<ImgContainerDiv>
							{ImgSrc ? <ImgContainer style={{ backgroundImage: `url(${ImgSrc})` }} /> : ''}
							<InputImg
								type="file"
								multiple
								accept="image/*"
								ref={ref}
								onChange={e => onUploadImg(e)}
							/>
							<ImgFileDiv onClick={onHandleRef}>
								<FaPlusCircle />
							</ImgFileDiv>
						</ImgContainerDiv>
					</UserInterface>
				</Section>
			)}
		</div>
	);
}
