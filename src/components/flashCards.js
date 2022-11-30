import cards from "./card";
import styled from "styled-components";
import React from "react";
function FlashCards({ viraCarta }) {
const [teste, setTeste] = React.useState([])

  function viraCarta(obj, key){
            setTeste([obj])
            console.log(teste)
            console.log(cards)
            console.log(cards.includes(...teste))
  }

  return (cards.map((a, b) => (teste[0] == cards[b] ? <PerguntaAberta> {cards[b].question} <ion-icon name="planet-outline"></ion-icon></PerguntaAberta> : <Card key={b}><p>{`Pergunta ${b + 1}`}</p><ion-icon onClick={() => viraCarta(a, b)} name="play-outline"></ion-icon></Card>) )
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
const PerguntaAberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export default FlashCards;
