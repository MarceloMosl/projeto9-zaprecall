import cards from "./card";
import styled from "styled-components";
import React from "react";
function FlashCards({ viraCarta, contador, setContador }) {
  const [cardClicked, setcardClicked] = React.useState([]);
  const [cardAnswer, setcardAnswer] = React.useState([]);
  const [answer, setAnswer] = React.useState("");
  const [emJogo, setEmJogo] = React.useState("");

  function viraCarta(obj) {
    setcardClicked([obj]);
    setEmJogo("sim");
    console.log(String(contador));
    console.log(cardAnswer[0]);
    console.log(cardAnswer[String(contador)]);
  }

  function respostaQuest(obj) {
    setAnswer(obj.answer);
  }
  function remebered(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "green";
    obj.icon = "checkmark-outline";
    cards[b].status = "green";
    cards[b].icon = "checkmark-outline";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }
  function AlmostNot(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "yellow";
    obj.icon = "help-circle-outline";
    cards[b].status = "yellow";
    cards[b].icon = "help-circle-outline";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }
  function didNot(obj, b) {
    setAnswer("");
    setcardClicked([]);
    setEmJogo("");
    obj.status = "red";
    obj.icon = "help-circle-outline";
    cards[b].status = "red";
    cards[b].icon = "help-circle-outline";
    const content = [...cardAnswer, obj];
    setcardAnswer(content);
    setContador(contador + 1);
  }

  const PerguntaFechada = (a, b) => (
    <Card key={b}>
      <p>{`Pergunta ${b + 1}`}</p>
      <ion-icon
        onClick={emJogo == "" ? () => viraCarta(a) : () => console.log("")}
        name="play-outline"
      >
        
      </ion-icon>
    </Card>
  );
  const PerguntaAberta = (a, b) => (
    <StylePerguntaAberta>
      {answer == "" ? cardClicked[0].question : answer}
      {answer == "" ? (
        <ion-icon
          onClick={() => respostaQuest(a)}
          name="planet-outline"
        ></ion-icon>
      ) : (
        <Buttoes>
          <NaoLembrei onClick={() => didNot(a, b)}>Não lembrei</NaoLembrei>
          <QuaseNao onClick={() => AlmostNot(a, b)}>Quase não lembrei</QuaseNao>
          <Zap onClick={() => remebered(a, b)}>Zap!</Zap>
        </Buttoes>
      )}
    </StylePerguntaAberta>
  );
  const PerguntaRespondida = (b) => (
    <CardFinalizado key={b}>
      <p style={{ color: `${cards[b].status}` }}> {`Pergunta ${b + 1}`} </p>
      <ion-icon
        style={{ color: `${cards[b].status}` }}
        name={`${cards[b].icon}`}
      >
        
      </ion-icon>
    </CardFinalizado>
  );
  return cards.map((a, b) =>
  cardAnswer.includes(cards[b])
    ? PerguntaRespondida(b)
    : cardClicked[0] === cards[b]
    ? PerguntaAberta(a, b)
    : PerguntaFechada(a, b)
)

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
  width: 150px;
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
const CardFinalizado = styled.div`
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
  ion-icon {
    color: #00ff00;
    font-size: 30px;
  }
`;

export default FlashCards;
