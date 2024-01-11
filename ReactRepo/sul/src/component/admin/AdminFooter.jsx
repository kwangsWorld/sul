import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledAdminFooterDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
    border-top: 1px solid;
    background-color: fff;

.footer_left{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.footer_right{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.footer_company{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10px;
    min-width: 190px;
    font-weight: bolder;
    font-size:20px;
}

.footer_time{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size:12px;
}

.footer_ul{
    min-width: 180px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer_ul>li{
    margin-right: 10px; 
}

`;

const AdminFooter = () => {
    return (
        <StyledAdminFooterDiv>
            <div className='footer_left'>
                        <p className='footer_company'>(주) 담아컴퍼니</p>
                        <p className='footer_time'>평일 10:00 ~ 18:00, 주말 휴무</p>
            </div>
            <div className='footer_right'>
                    <ul className='footer_ul'>
                        <li>
                            <Link to ="https://www.instagram.com/">
                                <img width="35" height="35"  src="https://artfeel.co.kr/web/product/big/201805/10523_shop1_15266062157845.jpg" alt="인스타" />
                            </Link>
                        </li>
                        <li>
                            <Link to ="https://www.youtube.com/">
                                <img width="35" height="35"  src="https://cdn-icons-png.flaticon.com/512/2111/2111795.png" alt="유튜브" />
                            </Link>
                        </li>
                        <li>
                            <Link to ="https://www.kakaocorp.com/page/service/service/KakaoTalk">
                                <img width="35" height="35"  src="https://i.pinimg.com/originals/52/64/2b/52642ba5d282c8d715fe0e329d88da68.png" alt="카톡" />
                            </Link>
                        </li>
                        <li>
                            <Link to ="https://www.facebook.com/?locale=ko_KR">
                                <img width="35" height="35"  src="https://cdn-icons-png.flaticon.com/512/37/37564.png" alt="페북" />
                            </Link>
                        </li>
                        <li>
                            <Link to ="https://www.naver.com/">
                                <img width="35" height="35"  src="https://src.wizad.co.kr/wizbbs/data/shopimg/A1517564350212_naver-logo.png" alt="인스타" />
                            </Link>
                        </li>
                    </ul>
            </div>
        </StyledAdminFooterDiv>
    );
};

export default AdminFooter;