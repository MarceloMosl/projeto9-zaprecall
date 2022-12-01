import styled from "styled-components";
import logo from "./assets/img/logo.png";
import Righteous from "./assets/Righteous-Regular.ttf";
import FlashCards from "./components/flashCards";
import React from "react";
import Footer from "./components/Footer";
export default function App() {
  const [contador, setContador] = React.useState(0);

  return (
    <>
      <Container>
        <div>
          <img src={logo}></img> <h1>ZapRecall</h1>
        </div>
        <FlashCards setContador={setContador} contador={contador} />
      </Container>
      <Footer contador={contador} />
    </>
  );
}
const Container = styled.div`
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  font-family: "Righteous";
  @font-face {
    font-family: "Righteous";
    src: url(${Righteous});
  }
  div {
    display: flex;
    align-items: center;
    margin: auto;
    margin: 40px 0 20px 0;
    img {
      width: 52px;
    }
    h1 {
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      color: #ffffff;
      margin-left: 20px;
    }
  }
`;
