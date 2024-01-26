import KakaoLogin from "react-kakao-login";

const SocialKakao =()=>{

    const kakaoClientId = 'JavaScript KEY'
    const kakaoOnSuccess = async (data)=>{
      	console.log(data)
        const idToken = data.response.access_token 
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
    };
    return(
        <>
          <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />
        </>
    )
}

export default SocialKakao;
