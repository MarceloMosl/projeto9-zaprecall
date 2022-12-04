import styled from "styled-components";
import logo from "./../assets/img/logo.png";
import Righteous from "./../assets/Righteous-Regular.ttf";
export default function TelaInicial({setStart}){

    return(
        <Content>
            <img src={logo}></img>
            <h1>ZapRecall</h1>
            <Iniciar data-teste="start-btn" onClick={() => setStart(true)}>Inicial Reacall!</Iniciar>
        </Content>

    )

}

const Content = styled.div`
height:100vh;
background-color: #fb6b6b;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
h1{
    font-family: 'Righteous';
    font-size:36px;
    color: white;
}
@font-face {
    font-family: "Righteous";
    src: url(${Righteous});
  }
`
const Iniciar = styled.button`
width: 246px;
height: 54px;
margin-top: 30px;
border-color: red;
color: red;
border-radius: 5px;
font-family: 'Recursive';
font-size: 18px;
font-weight: 400;

`