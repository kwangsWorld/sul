import React from 'react';
import styled from 'styled-components';

const StyledLoginDiv = styled.div`
    width: 100%;
    height: 100%;
    & > form {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    & > form > table{
        width: 40%;
        margin-top: 15%;
        padding-right: 8%;
        padding-bottom: 7%;
        padding-top: 5%;
        border: 1px solid lightgray;
        background-color: lightgray;
        border-radius: 50px;
    }

    & > form > table > tr > td {
        padding-left: 30%;
        padding-top: 5%;
    }
    & > form > table > tr > td > input {
        border: 1px solid lightgray;
        width: 100%;
        height: 60px;
        margin: -10px 0;
    }
    
`;



const Login = () => {

    // const navigate = useNavigate();

    // const jsonStr = sessionStorage.getItem("loginMemberVo");
    // const sessionLoginMemberVo = JSON.parse(jsonStr);
    // const [loginMemberVo, setLoginMemberVo] = useState(sessionLoginMemberVo);


    // const [vo, setVo] = useState();

    // const handleInputChange = (event)=>{
    // const {name, value} = event.target;

    //     setVo({
    //         ...vo ,
    //         [name]: value
    //     });
    // }

    // const handleClickLogin = (event) => {
    //     event.preventDefault();

    //     fetch("", {
    //         method: "POST",
    //         headers : {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(vo),
    //     })
    //     .then((resp)=>{return resp.json()})
    //     .then((data)=>{
    //         if(data.msg == "good"){
    //             alert("로그인 성공")
    //             sessionStorage.setItem("loginMemberVo", JSON.stringify(data.loginMemberVo));
    //             setLoginMemberVo
    //         }else{(data.loginMemberVo);
    //             alert("로그인 실패 ")
    //         }
    //     })
    //     .catch( ()=>{console.log(e);})                                                                                                                                                                                                                                                                                                                                                                                                  
    //     .finally( () => {console.log()})
    // }

    return (
        <StyledLoginDiv>
            <form>
                <table>
                    <tr>
                        <td><input type='text' name='id' placeholder='아이디'  /></td>
                    </tr>
                    <tr>
                        <td><input type='password' name='pwd' placeholder='비밀번호'  /></td>
                    </tr>
                    <tr>
                        <td><input type='submit' value="로그인" style={{backgroundColor: '#ffe23dfb'}}/></td>
                    </tr>
                </table>
            </form>
        </StyledLoginDiv>
    );
};

export default Login;