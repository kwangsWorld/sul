import React from 'react';
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

.footer_center_font{
    color: black;
    text-decoration: none;
    margin-right: 10px;
}



`

const Footer = () => {
    return (
        <StyledFooterDiv>
                <div className='footer_top'>
                    <div>
                        <p>담화컴퍼니 주식회사</p>
                        <p>고객센터: 070-5014-1282</p>
                        <p>평일 10:00 ~ 18:00, 주말 휴무</p>
                    </div>
                    <div></div>
                    <ul>
                        <li>
                            <img width="35" height="35"  src="https://artfeel.co.kr/web/product/big/201805/10523_shop1_15266062157845.jpg" alt="인스타" />
                        </li>
                        <li>
                            <img width="35" height="35"  src="https://cdn-icons-png.flaticon.com/512/2111/2111795.png" alt="유튜브" />
                        </li>
                        <li>
                            <img width="35" height="35"  src="https://i.pinimg.com/originals/52/64/2b/52642ba5d282c8d715fe0e329d88da68.png" alt="카톡" />
                        </li>
                        <li>
                            <img width="35" height="35"  src="https://cdn-icons-png.flaticon.com/512/37/37564.png" alt="인스타" />
                        </li>
                        <li>
                            <img width="35" height="35"  src="https://src.wizad.co.kr/wizbbs/data/shopimg/A1517564350212_naver-logo.png" alt="인스타" />
                        </li>
                    </ul>
                </div>
                <div className='footer_center'>
                    <a className="footer_center_font" href="">이용약관</a>
                    <a className="footer_center_font" href="">개인정보처리방침</a>
                    <a className="footer_center_font" href="">입점문의</a>
                </div>
                <div className='footer_bottom'>
                    <div className='footer_bottom_first'>
                        <p>대표: 전옥진</p>
                        <p>사업자등록번호: 123-45-67899</p>
                        <a href="">사업자확인</a>
                        <p>통신판매 신고번호: 2021-서울서초-2084</p>
                    </div>
                    <div className='footer_bottom_second'>
                        <p>주소: 서울특별시 서초구 역삼동 호산빌딩 6층</p>
                        <p>정보보호 책임자: 최지우</p>
                        <p>대표 전화: 1588-3082</p>
                        <p>info@suldama.com</p>
                    </div>
                    <div className='footer_bottom_second'></div>
                </div>
        </StyledFooterDiv>
    );
};

export default Footer;