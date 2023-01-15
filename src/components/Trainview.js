import React from "react";
import styled from "styled-components";
import StyledA from "./styles/StyledA";
import StyledButton from "./styles/StyledButton";
import StyledP from "./styles/StyledP";

const TrainViewWrapper = styled.div`
  margin: ${({ theme }) => theme.sizes.mediumSize};
  align-items: right;
  border: 1px solid;
`;

const TrainView = ({ trainData, setTrainArr }) => {
  return (
    <TrainViewWrapper>
      <StyledP textAlign="left">Train number: {trainData.number} </StyledP>
      <StyledP textAlign="left">
        Train first station : {trainData.firstStation}
      </StyledP>
      <StyledP textAlign="left">
        Train last station: {trainData.lastStation}
      </StyledP>
      <StyledButton>
        <StyledA href={`/buyTicket/${trainData.id}`}>Buy Ticket</StyledA>
      </StyledButton>
    </TrainViewWrapper>
  );
};

export default TrainView;
