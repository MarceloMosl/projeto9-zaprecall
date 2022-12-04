import styled from "styled-components";
import cards from "./card";

export default function Footer({contador}) {

  return (
    <>
   
    <Foot>
    <Icones>{cards.map((a,b) => !cards[b].icon ? "" : <ion-icon style={{color: `${cards[b].status}`}} name={cards[b].icon}></ion-icon>)}</Icones>
      <section>
        <p>{contador}/{cards.length} Concluidos</p>
      </section>
    </Foot>
    </>
  );
}

const Foot = styled.section`
  width: 100%;
  min-height: 60px;
  background-color: #ffffff;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  section{
    margin: auto;
  }
`;
const Icones = styled.section`
display: flex;
margin: auto;
font-size: 25px;
`