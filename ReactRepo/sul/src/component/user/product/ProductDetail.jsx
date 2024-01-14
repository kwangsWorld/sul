import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledDetailDiv = styled.div`
    
    width: 100%;
    height:100%;
    background-color: lightskyblue;
    padding: 30px 300px;
    display: flex;

    .left_side{
        width:60%;
        height: 100%;
        background-color: pink;
    }

    .left_side_top{
        display: flex;
        background-color: lightcoral;
    }
    
    .left_side_down{
        background-color: gray;
    }

    .right_side{
        width: 40%;
        height: 100%;
        background-color: orange;
    }

    .count_box{
        display: flex;
    }
    
`;


const ProductDetail = () => {
    const navigate = useNavigate();
    return (
        <StyledDetailDiv>
            <div className='left_side'>
                <div className='left_side_top'>
                    <div className='left_img'>
                        <img 
                            width= '400px' 
                            height= '400px' 
                            src="https://m.soollove.com/web/product/big/202312/57fda681ed7628e049055c3f0df77ba9.jpg" 
                            alt="bottle" 
                        />
                    </div>
                    <div className='left_detail'>
                        <div>WON SOJU</div>
                        <div>종류: 증류주</div>
                        <div>평점: 5점</div>
                        <div>용량: 375ml</div>
                        <div>판매가격: 15000원</div>
                        <div>도수:12%</div>
                        <div>유통기한:제조일로부터 6개월</div>
                        <div>보관방법: 냉장 보관</div>
                    </div>
                </div>
                <div className='left_side_down'>
                    <div className='taste'> 맛 : 계피차에 귤 과즙 한숱갈 넣은 맛</div>
                    <div className='appetizer'> 안주: 제주에서 찾던 음식과 함께 여행분위기를 보세요</div>
                </div>
            </div>
            <div className='right_side'>
                <div>수량</div>
                <div className='count_box'>
                    <div>
                        <img width= '50px' height= '50px' src="https://cdn.icon-icons.com/icons2/1674/PNG/512/minus_111123.png" alt="마이너스" />
                    </div>
                    <input type="number" />
                    <div>
                        <img width= '50px' height= '50px'src="https://cdn.icon-icons.com/icons2/510/PNG/512/plus-round_icon-icons.com_50065.png" alt="플러스" />
                    </div>
                </div>
                <div>총 상품가격</div>
                <input type="text" />
                <br />
                <button >장바구니</button> 
                <button onClick={()=> {navigate("/buy/list");}}>바로 구매하기</button>
            </div>
        </StyledDetailDiv>
    );
};

export default ProductDetail;