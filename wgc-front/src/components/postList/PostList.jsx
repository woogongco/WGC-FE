import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Post from 'components/post/Post';
import { axiosGet } from '../../Utils/AxiosUtils';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';
import { boardMenu } from '../../store/RecoilStates/BoardMenu';

const Wrapper = styled.section`
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 230px);
	gap: 78px 2rem;
	justify-content: center;
`;
const SectionDiv = styled.div`
	overflow: scroll;
	display: block;
	//min-height: 70rem;
	height: 30rem;
	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 50px;
		background: #cb8589;
		max-height: 0.1rem;
	}
`;

export default function PostList() {
	const [ref, inView] = useInView({ root: null, threshold: 0.5, rootMargin: '0px' });
	const [page, setpage] = useState(6);
	const [Data, setdata] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const url = window.location.pathname.split('/')[2];
	const [board, setBoard] = useRecoilState(boardMenu);

	/*useEffect(() => {
    FIXME board 상태에 따라 게시글 바뀌게 수정해야함
    }, [board]);*/

	const GetPost = useCallback(async () => {
		await axiosGet(`/post?limit=${page}`)
			.then(res => {
				setdata(res);
				setpage(page => page + 3);
				setLoading(true);
			})
			.catch(err => console.log(err));
	}, [Data]);

	useEffect(() => {
		GetPost();
	}, [inView]);
	return (
		<SectionDiv>
			{isLoading === true ? (
				<Wrapper>
					{Data.data[url]?.map((post, index) => {
						return (
							<Post
								key={index}
								title={post.title}
								content={post.content}
								like={post.like}
								view={post.view}
							/>
						);
					})}
					<div ref={ref} />
				</Wrapper>
			) : (
				''
			)}
		</SectionDiv>
	);
}
