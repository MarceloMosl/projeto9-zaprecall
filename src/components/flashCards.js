import cards from "./card";
import styled from "styled-components";
import React from "react";
function FlashCards({ viraCarta }) {
  const [cardClicked, setcardClicked] = React.useState([]);
  const [answer, setAnswer] = React.useState("");
  const [emJogo, setEmJogo] = React.useState("")


  function viraCarta(obj) {
    setcardClicked([obj]);
    setEmJogo("sim")
  }

  function respostaQuesta(obj){
    setAnswer(obj.answer)
  }
  function acertei(){
    setAnswer("")
    setcardClicked([])
    setEmJogo("")
  }

  const PerguntaAberta = (a,b) => (
    <StylePerguntaAberta>
      {answer == "" ? cardClicked[0].question : answer}
      {answer == "" ? <ion-icon onClick={()=>respostaQuesta(a)} name="planet-outline"></ion-icon> : <div><button onClick={acertei}>acertei</button> <button>não lembrei</button> <button>lembrei +-</button></div> }
      </StylePerguntaAberta>
      );
  const PerguntaFechada = (a,b) => (
    <Card key={b}>
      <p>{`Pergunta ${b + 1}`}</p>
      <ion-icon onClick={emJogo == "" ? () => viraCarta(a): ""} name="play-outline"> </ion-icon>
    </Card>
      );


  return cards.map((a, b) => cardClicked[0] === cards[b] ? PerguntaAberta(a,b) : PerguntaFechada(a,b)
  );
}
const Card = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: auto;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  ion-icon {
    font-size: 30px;
  }
`;
const StylePerguntaAberta = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ion-icon {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;

export default FlashCards;
