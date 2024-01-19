import styled from 'styled-components';
import Myheader from './Myheader';
import { Link} from 'react-router-dom';

const StyledInfoDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    table{
        border: 3px solid gray;
        border-radius: 30px;
        width: 40%;
        margin-bottom: 10%;
        margin-top: 3%;
        padding-bottom: 3%;
        
    }
    td{
        padding-top: 5%;
        font-weight: bold;
        font-size: 17px;
        border-collapse: collapse;
    }
    
    td:first-child{
        padding-left: 15%;
    }
    td:nth-child(2){
        padding-left: 20%;
        text-align: left;
    }

    .font{
        border-bottom: 3px solid gray;
    }
    .alink{
        text-decoration: none;
        color: blue;
    }

`;

const Info = () => {

    const loginInfo = JSON.parse(sessionStorage.getItem('loginMemberVo'));

    return (
        <StyledInfoDiv>
            <Myheader />
            <table>
                <tr>
                    <td className='font'><h3>회원정보</h3></td>
                    <td  className='font'><Link className='alink' to="/mypage/infoedit">수정</Link></td>
                </tr>
                {
                    <>
                    
                         <tr>
                            <td>회원명</td>
                            <td>{loginInfo.name}</td>
                        </tr>
                        <tr>
                            <td>생년월일</td>
                            <td>{loginInfo.age}</td>
                        </tr>
                        <tr>
                            <td>닉네임</td>
                            <td>{loginInfo.nick}</td>
                        </tr>
                        <tr>
                            <td>이메일</td>
                            <td>{loginInfo.email}</td>
                        </tr>
                        <tr>
                            <td>아이디</td>
                            <td>{loginInfo.id}</td>
                        </tr>
                        <tr>
                            <td>비밀번호</td>
                            <td>{loginInfo.pwd}</td>
                        </tr>
                        <tr>
                            <td>휴대폰 번호</td>
                            <td>{loginInfo.tel}</td>
                        </tr>
                      
                    </>
                   
                }
                
            </table>
            
        </StyledInfoDiv>
    );
};

export default Info;