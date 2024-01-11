import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
width: 100%;
padding: 30px 20px 150px;
background-color: white;
border-top: 1px solid rgb(224, 224, 224);

.footer_top{
    display: flex;
    justify-content: space-between;
}

.footer_company{
    font-weight: bolder;
    font-size:20px;
    margin-bottom:16px;
}

.footer_cs{
    font-size:10px;
    margin-bottom: 10px;
}

.footer_time{
    font-size:12px;
    margin-bottom: 12px;
}



.footer_center_font{
    font-size: 12px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    margin-right: 10px;
}

.footer_ul{
    min-width: 182px;
    list-style-type: none;
    display: flex;
}

.footer_ul>li{
    margin-right: 10px; 
}


.footer_bottom_first{
    display:flex;
    font-size:12px;
    align-items: center;
}

.footer_bottom_first>p{
    margin-right: 10px;
}

.footer_bottom_first>a{
    margin-right: 10px;
    text-decoration: none;
    color:black;
}

.footer_bottom_second{
    display:flex;
    font-size:12px;
    margin-right: 10px;
    align-items: center;
}

.footer_bottom_second > p{
    margin-right: 15px;
}

`

const Footer = () => {
    return (
        <StyledFooterDiv>
                <div className='footer_top'>
                    <div>
                        <p className='footer_company'>담아컴퍼니 주식회사</p>
                        <p className='footer_cs'>고객센터: 070-5014-1282</p>
                        <p className='footer_time'>평일 10:00 ~ 18:00, 주말 휴무</p>
                    </div>
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
                <div className='footer_center'>
                    <Link to ="https://www.naver.com/"  className="footer_center_font">이용약관</Link>
                    <Link to ="https://www.naver.com/"  className="footer_center_font">개인정보처리방침</Link>
                    <Link to ="https://www.naver.com/"  className="footer_center_font">입점문의</Link>
                </div>
                <div className='footer_bottom'>
                    <div className='footer_bottom_first'>
                        <p>대표: 전옥진</p>
                        <p>사업자등록번호: 123-45-67899</p>
                        <Link to ="https://www.naver.com/">사업자확인</Link>
                        <p>통신판매 신고번호: 2021-서울서초-2084</p>
                    </div>
                    <div className='footer_bottom_second'>
                        <p>주소: 서울특별시 서초구 역삼동 호산빌딩 6층</p>
                        <p>정보보호 책임자: 최지우</p>
                        <p>대표 전화: 1588-3082</p>
                        <p>이메일:info@suldama.com</p>
                    </div>
                    <div className='footer_bottom_second'></div>
                </div>
        </StyledFooterDiv>
    );
};

export default Footer;