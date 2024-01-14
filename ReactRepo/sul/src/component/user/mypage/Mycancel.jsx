import React from 'react';
import styled from 'styled-components';
import Myheader from './Myheader';

const StyledMycancelDiv = styled.div`
    .main {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 5%;
  }
  table {
    border-collapse: collapse;
    width: 40%;
    border: 2px solid gray;
  }
  tr:nth-child(4) {
    border-bottom: 1px solid gray;
  }
  table td {
    padding-left: 19%;
    padding-top: 2%;
    padding-bottom: 3%;
    text-align: left;
    font-weight: bold;
  }
`;

const Mycancel = () => {
    return (
        <StyledMycancelDiv>
            <Myheader />
      <div className='main'>
        <table>
          <tbody>
            <tr>
              <td>2022.01.01</td>
            </tr>
            <tr>
              <td>이미지</td>
            </tr>
            <tr>
              <td>술이름술술</td>
            </tr>
            <tr>
              <td>수량1개</td>
            </tr>
          </tbody>
        </table>
      </div>
        </StyledMycancelDiv>
    );
};

export default Mycancel;