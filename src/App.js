import React, { memo } from "react";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificate from "./components/Certificate";

const GlobalStyle = createGlobalStyle`
${reset}
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  margin-top: 100px;

  div.profile {
    width: 120px;
    height: 120px;
    margin-bottom: 50px;
    background-color: orange;
    border-radius: 3px;

    img {
      width: 120px;
      height: 120px;
    }
  }

  h1 {
    margin-bottom: 50px;
    color: rgb(55, 53, 47);
    font-size: 32px;
    font-weight: 700;
    line-height: 38.4px;
  }
`;

const StyleContainer = styled.div`
  margin-bottom: 60px;

  h2 {
    color: rgba(68, 131, 97, 1);
    font-size: 1.875em;
    font-weight: 600;
    line-height: 1.3;

    &::after {
      display: block;
      content: "";
      width: 100%;
      height: 1px;
      margin: 10px 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }

  div.item-list {
    padding-top: 20px;

    div.item {
      display: flex;
      margin-bottom: 40px;

      h3 {
        width: 50%;
        margin-right: 10%;
        color: rgb(55, 53, 47);
        font-size: 21px;
        font-weight: 600;
        line-height: 27.3ㅔㅌ;
      }

      ul {
        width: 40%;

        li {
          display: flex;
          align-items: center;
          color: rgb(55, 53, 47);
          font-size: 14px;
          line-height: 21px;

          &::before {
            display: block;
            content: "";
            width: 5px;
            height: 5px;
            margin-right: 10px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 0.8);
          }
        }
      }
    }
  }
`;

const App = memo(() => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <div className="profile">
          <img src="" alt="사진 넣자" />
        </div>
        <h1>양승갑의 포트폴리오</h1>
        <About StyleContainer={StyleContainer} />
        <Skills StyleContainer={StyleContainer} />
        <Projects StyleContainer={StyleContainer} />
        <Education StyleContainer={StyleContainer} />
        <Certificate StyleContainer={StyleContainer} />
      </AppContainer>
    </>
  );
});

export default App;
