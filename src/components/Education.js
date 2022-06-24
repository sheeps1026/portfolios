import React, { memo } from "react";

const Education = memo(({ StyleContainer }) => {
  return (
    <StyleContainer>
      <h2>Education</h2>
      <div className="item-list">
        <div className="item">
          <h3>이젠아카데미 강남 풀스택 웹개발자 (프론트엔드&백엔드) 수료</h3>
          <ul>
            <li>2022.01 ~ 2022.07</li>
          </ul>
        </div>
        <div className="item">
          <h3>
            한국교통대학교 (의왕)
            <br />
            컴퓨터정보공학과 전공
          </h3>
          <ul>
            <li>2015.03 ~ 2021.08</li>
          </ul>
        </div>
        <div className="item">
          <h3>동안고등학교</h3>
          <ul>
            <li>2012.03 ~ 2015.02</li>
          </ul>
        </div>
      </div>
    </StyleContainer>
  );
});

export default Education;
