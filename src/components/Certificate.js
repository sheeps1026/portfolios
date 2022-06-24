import React, { memo } from "react";
import styled from "styled-components";

const Certificate = memo(({ StyleContainer }) => {
  return (
    <StyleContainer>
      <h2>Certificate</h2>
      <div className="item-list">
        <div className="item">
          <h3>정보처리기사</h3>
          <ul>
            <li>2020.12.31 취득</li>
          </ul>
        </div>
        <div className="item">
          <h3>SQLD 개발자</h3>
          <ul>
            <li>2020.10.06 취득</li>
          </ul>
        </div>
      </div>
    </StyleContainer>
  );
});

export default Certificate;
