import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FaPlus } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { myInfo } from '../../store/RecoilStates/UserInfo';
import { axiosPost } from 'Utils/AxiosUtils';

const Base = styled.div`
	width: 100%;
	position: relative;
`;

const ContainerDiv = styled.div`
	position: relative;
	display: inline-block;
	margin: 1.5em 0 1.5em 15px;
	width: 234px;
	height: 234px;
	line-height: 90px;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
	//background: linear-gradient(219.11deg, #b9e6e9 30.15%, #cb8387 89.69%);
	background-size: cover;
	border-top-left-radius: 40%;
	border-top-right-radius: 50%;
	border-bottom-right-radius: 50%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	display: flex;
	text-align: center;
	width: 300px;
	justify-content: center;
	color: white;
	font-style: normal;
	font-weight: 400;
	font-size: 28px;
`;

const TitleWappr = styled.div`
	display: flex;
	text-align: center;
`;

const StackTextContainer = styled.div`
	display: flex;
	color: white;
`;

const StackTextItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 126px;
	margin-left: 15px;
	font-style: normal;
	font-weight: 400;
	font-size: 17px;
	line-height: 16px;
	& p {
		border-left: 1px solid white;
		padding-left: 10px;
	}
`;

const StackContainer = styled.div`
	display: flex;
	width: 200px;
	text-align: center;
	margin-left: 15px;
	border-left: 1px solid white;
`;

const StackWapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-left: 10px;
`;

const StackItem = styled.div`
	background-color: ${props => props.color || 'red'};
	padding: 5px;
	border-radius: 25px;
	display: inline-block;
	margin-top: 5px;
`;

const WoogCoTextContainer = styled.div`
	margin-left: 25px;
	color: white;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	padding-top: 15px;
`;

const WgcText = styled.span`
	text-shadow: 2px 2px #ff9898;
	font-style: normal;
	font-weight: 600;
	font-size: 64px;
	line-height: 60px;
`;

const WgcTextTop = styled.p`
	color: white;
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	height: 9px;
`;

const WgcTextBottomP = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	color: rgba(255, 255, 255, 0.7);
`;

const Borderdiv = styled.div`
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	margin-bottom: 10px;
	width: 100%;
`;

const FristColorCircle = styled.div`
	width: 19px;
	height: 19px;
	background: #b3cad3;
	position: absolute;
	top: -5%;
	right: 5%;
	border-radius: 360%;
`;

const SecoundColorCircle = styled.div`
	width: 19px;
	height: 19px;
	background: #ffb548;
	position: absolute;
	top: 5%;
	right: -3%;
	border-radius: 360%;
`;

const ThreeColorCircle = styled.div`
	width: 19px;
	height: 19px;
	background: #5a0cff;
	position: absolute;
	top: 20%;
	right: -10%;
	border-radius: 360%;
`;

const FourColorCircle = styled.div`
	width: 19px;
	height: 19px;
	background: #ffb548;
	position: absolute;
	top: 35%;
	right: -13%;
	border-radius: 360%;
`;

const FiveColorCircle = styled.div`
	width: 19px;
	height: 19px;
	background: #ff2a38;
	position: absolute;
	top: 50%;
	right: -13%;
	border-radius: 360%;
`;
//fetch로 값이 있을 경우 00님의 미니홈피 없다면 null 값으로 보여주고
//자기소개 작성과 today 일촌 관리
//색깔변하는 작은 원들은 백엔드에서 색깔 데이터를 받아와서 원을 만들예쩡
// 배열을 만들어서 해당 index 번호를 가지고 맞으면 그 색깔을 보여주는 logic으로 생각중
// store에 있는 값을 가져올수도 있다.
export default function Profile() {
	const userInfo = useRecoilValue(myInfo);

	const HandleColor = useCallback(async color => {
		const res = await axiosPost('/member/information', {
			color: color,
		});
		console.log(res);
	}, []);

	return (
		<Base>
			<Title>
				<TitleWappr>{userInfo && <h4>{userInfo.name}님의 미니 홈피</h4>}</TitleWappr>
			</Title>
			{userInfo && ( // FIXME : 사용자 소개 스타일링 필요함.
				<>
					<br />
					<h5 style={{ color: 'white' }}>{userInfo.introduction}</h5>
				</>
			)}
			<ContainerDiv style={{ backgroundImage: `url(${userInfo.profileImage || ''})` }}>
				{!userInfo && <div>로그인해주세요</div>}
				<FristColorCircle
					onClick={e => {
						HandleColor('#b3cad3');
					}}
				/>
				<SecoundColorCircle
					onClick={e => {
						HandleColor('#ffb548');
					}}
				/>
				<ThreeColorCircle
					onClick={e => {
						HandleColor('#5a0cff');
					}}
				/>
				<FourColorCircle
					onClick={e => {
						HandleColor('#ffb548');
					}}
				/>
				<FiveColorCircle
					onClick={e => {
						HandleColor('#ff2a38');
					}}
				/>
			</ContainerDiv>
			<StackTextContainer>
				<StackTextItem>
					<p>Stack</p>
					<FaPlus color="white" />
				</StackTextItem>
			</StackTextContainer>
			<StackContainer>
				<StackWapper>
					{userInfo && (
						<>
							{userInfo.skil?.split(',').map(i => (
								<StackItem key={Math.random()}>{i}</StackItem>
							))}
						</>
					)}
				</StackWapper>
			</StackContainer>
			<WoogCoTextContainer>
				<WgcTextTop>개발자들의 이야기, </WgcTextTop>
				<span>
					<WgcText>WGC</WgcText>에서 시작하자!
				</span>
				<WgcTextBottomP>커뮤니티부터 프로젝트 준비까지</WgcTextBottomP>
				<Borderdiv />
			</WoogCoTextContainer>
		</Base>
	);
}
