import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledCsBoardDetailDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
        h1{
            padding-bottom: 2%;
        }
        table{
            width: 60%;
            height: 60%;
            font-size: 16px;
            border-collapse: collapse;
            border: 2px solid black;
        }
        table > tr:nth-child(2) {
            border-bottom: 2px solid black;
        }
        tr > td:first-child{
            padding-left: 10%;
            font-weight: bold;
        }
        tr > td:nth-child(3) {
            padding-left: 10%;
            font-weight: bold;
        }
        .back_button {
            width: 100px;
            height: 50px;
            margin-top: 30px;
            font-weight: bold;
        }
`;

const CsBoardDetail = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const csboardVo = location.state.vo;

    // 뒤로가기 버튼 클릭 시 동작 함수
    const handleBack = () => {
        navigate("/csboard/list")
    };

    return (
        <StyledCsBoardDetailDiv>
            <h1>
                고객센터
            </h1>
            <table>
                <tr>
                    <td>제목</td>
                    <td>{csboardVo.qTitle}</td>
                    <td>작성자</td>
                    <td>{csboardVo.nick}</td>
                </tr>
                <tr>
                    <td>문의내용</td>
                    <td>{csboardVo.qContent}</td>
                    <td className='img'>이미지</td>
                    <td className='img'><img src={csboardVo.qImg} alt="사진" width='100px' height='100px'/></td>
                </tr>
                <tr>
                    <td className=''>답변</td>
                    <td className=''>{csboardVo.aContent}</td>
                    <td className=''>답변날짜</td>
                    <td className=''>{csboardVo.answerDate}</td>
                </tr>
            </table>
            <input style={{backgroundColor: '#ffe23dfb'}} className='back_button' type="submit" value="뒤로가기" onClick={handleBack} />
        </StyledCsBoardDetailDiv>
    );
};

export default CsBoardDetail;