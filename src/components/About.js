import React, { memo } from "react";

const Education = memo(({ StyleContainer }) => {
  return (
    <StyleContainer>
      <h2>About</h2>
      <div className="item-list">
        <div className="item">
          <h3>Introduction</h3>
          <ul>
            <li>채워</li>
            <li>채워</li>
          </ul>
        </div>
      </div>
    </StyleContainer>
  );
});

export default Education;
