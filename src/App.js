import styled from "styled-components";
import Righteous from "./assets/Righteous-Regular.ttf";
import FlashCards from "./components/flashCards";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header"
import TelaInicial from "./components/telainicial"
import { createGlobalStyle } from "styled-components";

export default function App() {
  const [contador, setContador] = React.useState(0);
  const [start, setStart] = React.useState(false)

  return (
    <>
      <GlobalStyle />
     {!start ? <TelaInicial setStart={setStart}/>
      :<Container>
        <Header />
        <FlashCards setContador={setContador} contador={contador} />
        <Footer contador={contador} />
      </Container>}
      
    </>
  );
}
const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`
const Container = styled.div`
width: 100%;
  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  font-family: "Righteous";
  @font-face {
    font-family: "Righteous";
    src: url(${Righteous});
  }
  div {
    display: flex;
    align-items: center;
    margin: auto;
    margin: 40px 0 0px 0;
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
