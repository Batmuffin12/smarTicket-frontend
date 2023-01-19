import React from "react";
import styled from "styled-components";
import StyledButton from "./styles/StyledButton";
import StyledLink from "./styles/StyledLink";
import StyledP from "./styles/StyledP";

const TrainViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${({ theme }) => theme.sizes.mediumSize};
  margin-right: auto;
  border: 1px solid;
  padding: ${({ theme }) => theme.sizes.mainPadding};
  width: 300px;
  height: 200px;
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
        <StyledLink to={`/buyTicket/${trainData.id}`}>Buy Ticket</StyledLink>
      </StyledButton>
    </TrainViewWrapper>
  );
};

export default TrainView;
