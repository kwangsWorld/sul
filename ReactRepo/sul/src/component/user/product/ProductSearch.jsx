import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paging from '../../../paging/Paging';
import { useLocation, useNavigate } from 'react-router-dom';

const StyledProductSearchDiv = styled.div`
        width: 100vw;
        height: 100vh;
        /* background-color: lightcoral; */
        display: grid;
        grid-template-rows: 0.5fr 4fr 4fr;

        .second_line, .three_line{
            display: grid;
            grid-template-columns: 2fr 2fr 2fr 2fr 2fr;
        }

        .detail_box{
            /* background-color: bisque; */
            display: grid;
            grid-template-rows: 7fr 0.8fr 0.8fr 0.8fr;
            justify-content: center;
            align-items: center;
            text-align: center;
            cursor: pointer;
        }

        .first_line{
            font-size: 25px;
        }

        .image{
            border-radius: 10px;
        }
`;

const ProductSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const vo = location.state.pName;

    console.log("넘어와라222" , location);
    console.log("넘어와라" , vo);
    // 페이징
    const [pageTotal , setPageTotal] = useState([]);
    const [pageVo , setPageVo] = useState({
        pageNo : 1,
        limit : 10,
        pName : vo,
    });

    // 페이지 클릭 시 동작 함수
    const handlePageChange = (pageNo) => {
        setPageVo( (pageVo) => ({
            ...pageVo ,
            pageNo: pageNo,
        }));
    };

    // 목록조회
    const [voList , setVoList] = useState([]);
    const loadSearchList = () => {
        fetch("http://127.0.0.1:8888/app/product/search" , {
            method : 'post' ,
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pageVo)
        })
        .then( (resp) => {return resp.json()} )
        .then( (data) => { 
            setVoList(data.voList);
            setPageTotal(data.pageTotal); 
        })
        .catch(error => console.error("Error fetching data:" , error));
    };

    // 렌더링 이후 내용실행
    useEffect( () => {
        loadSearchList();
    }, [pageVo] );

    const box = () => {
        return voList.map((vo) => (
        <div className='detail_box' key={vo.no} onClick={()=>{
            navigate("/product/detail/" + vo.productNo);
        }}
        >
              {console.log(vo)}
              <img src={vo.image} alt="사진" width='300px' height='300px'/>
              <div>이름:{vo.pName}</div>
              <div>가격:{vo.price}원</div>
              {/* <div>평점:{vo.rating}점</div> */}
        </div>
      ));
    };

    return (
        <StyledProductSearchDiv>
            <div className='first_line'> 
            🍾어떤 술 찾으세요?🍾
            </div>
            <div className='second_line'>
                {box()}
            </div>
            <div className='three_line'>
            </div>
            <div id="pageArea">
                <Paging pageTotal={pageTotal} currentPage={pageVo.pageNo} handlePageChange={handlePageChange}/>
            </div>
        </StyledProductSearchDiv>
    );
};

export default ProductSearch;