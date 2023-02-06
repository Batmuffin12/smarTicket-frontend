import React from "react";
import styled from "styled-components";

const PhaseWrapper = styled.div`
  height: 10%;
  display: flex;
  padding: 10px;
  justify-content: space-evenly;
`;

const PhaseItem = styled.div`
  border-radius: 50%;
  padding: 10px;
  width: 32px;
  height: 32px;
  color: ${({ key, phase }) => (phase === key ? "green" : "black")};
  border: 1px solid black;
`;
const PhaseBar = styled.div`
  margin: auto;
  height: 20%;
  width: 100%;
  background-color: cornflowerblue;
`;

const Phase = ({ items, phase }) => {
  return (
    <PhaseWrapper>
      {items?.map((item, index) => (
        <>
          {item.text || ""}
          <PhaseItem key={index} phase={phase - 1}>
            {index}
          </PhaseItem>
          {items[index + 1] ? <PhaseBar key={`bar${index}`} /> : null}
        </>
      ))}
    </PhaseWrapper>
  );
};

export default Phase;
