import cards from "./card";
import styled from "styled-components";
import React from "react";
function FlashCards({ contador, setContador }) {
  const [cardClicked, setcardClicked] = React.useState([]);
  const [cardAnswer, setcardAnswer] = React.useState([]);
  const [answer, setAnswer] = React.useState("");
  const [emJogo, setEmJogo] = React.useState("");

  function testButton(b){
    if(cards[b].status == "#2FBE34"){
      return "zap-icon"
    }else if(cards[b].status == "#FF922E"){
      return "partial-icon"
    }else{
      return "no-icon"
    }
  }

  function viraCarta(obj) {
    setcardClicked([obj]);
    setEmJogo("sim");
  }

  function respostaQuest(obj) {
    setAnswer(obj.answer);
  }
  function remebered(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "#2FBE34";
    obj.icon = "checkmark-circle";
    cards[b].status = "#2FBE34";
    cards[b].icon = "checkmark-circle";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }
  function AlmostNot(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "#FF922E";
    obj.icon = "help-circle";
    cards[b].status = "#FF922E";
    cards[b].icon = "help-circle";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }
  function didNot(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "#FF3030";
    obj.icon = "close-circle";
    cards[b].status = "#FF3030";
    cards[b].icon = "close-circle";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }

  const PerguntaFechada = (a, b) => (
    <Card data-test="flashcard" key={b}>
      <p data-test="flashcard-text">{`Pergunta ${b + 1}`}</p>
      <ion-icon
        data-test="play-btn"
        onClick={emJogo == "" ? () => viraCarta(a) : console.log("")}
        name="play-outline"
      ></ion-icon>
    </Card>
  );
  const PerguntaAberta = (a, b) => (
    <StylePerguntaAberta>
      {answer == "" ? cardClicked[0].question :<p data-test="flashcard-text"> {answer} </p>}
      {answer == "" ? (
        <ion-icon data-test="turn-btn" onClick={() => respostaQuest(a)} name="repeat"></ion-icon>
      ) : (
        <Buttoes>
          <NaoLembrei data-test="no-btn" onClick={() => didNot(a, b)}>Não lembrei</NaoLembrei>
          <QuaseNao data-test="partial-btn" onClick={() => AlmostNot(a, b)}>Quase não lembrei</QuaseNao>
          <Zap data-test="zap-btn" onClick={() => remebered(a, b)}>Zap!</Zap>
        </Buttoes>
      )}
    </StylePerguntaAberta>
  );
  const PerguntaRespondida = (b) => (
    <Card key={b}>
      <p
        style={{ color: `${cards[b].status}`, textDecoration: "line-through" }}
        data-test="flashcard-text"
      >
        {`Pergunta ${b + 1}`}
      </p>
      <ion-icon
        data-test= {() => testButton(b)}
        style={{ color: `${cards[b].status}` }}
        name={`${cards[b].icon}`}
      ></ion-icon>
    </Card>
  );
  return cards.map((a, b) =>
    cardAnswer.includes(cards[b])
      ? PerguntaRespondida(b)
      : cardClicked[0] === cards[b]
      ? PerguntaAberta(a, b)
      : PerguntaFechada(a, b)
  );
}

const Card = styled.div`
  width: 300px;
  height: 60px;
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
  background: #ffffd4;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ion-icon {
    font-size: 30px;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
const Buttoes = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin: 20px;
  gap: 10px;
`;
const Zap = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #2fbe34;
  color: white;
`;
const QuaseNao = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #ff922e;
  color: white;
`;
const NaoLembrei = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background-color: #ff3030;
  color: white;
`;

export default FlashCards;
