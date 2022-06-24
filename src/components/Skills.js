import React, { memo } from "react";

const Education = memo(({ StyleContainer }) => {
  return (
    <StyleContainer>
      <h2>Skills</h2>
      <div className="item-list">
        <div className="item">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5, CSS3(SCSS), JS(ES6)</li>
            <li>React</li>
          </ul>
        </div>
        <div className="item">
          <h3>Backend</h3>
          <ul>
            <li>채워</li>
          </ul>
        </div>
        <div className="item">
          <h3>
            Tools &<br />
            Collaboration
          </h3>
          <ul>
            <li>VS Code</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </StyleContainer>
  );
});

export default Education;
