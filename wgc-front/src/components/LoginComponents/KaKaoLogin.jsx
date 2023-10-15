const KaKaoLogin = () => {
	const key = process.env.KAKAO_APP_LOGIN_ACCESS_KEY;
	return (
		<>
			<script
				src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
				integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
				crossOrigin="anonymous"
			/>
			<script>Kakao.init(`{key}`);</script>
		</>
	);
};

export default KaKaoLogin;
