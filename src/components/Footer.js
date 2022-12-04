import styled from "styled-components";
import cards from "./card";

export default function Footer({contador}) {

  return (
    <Foot>
      <p>
        {contador}/{cards.length} Concluidos
      </p>
    </Foot>
  );
}

const Foot = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  /* padding: 10px; */
  margin: 0;
`;
