import React from "react";
import StyledA from "./styles/StyledA";
import StyledButton from "./styles/StyledButton";
import StyledP from "./styles/StyledP";

const TrainView = ({ trainData, setTrainArr }) => {
  return (
    <div>
      <StyledP>train number: {trainData.number} </StyledP>
      <StyledP>train first station : {trainData.firstStation}</StyledP>
      <StyledP>train last station: {trainData.lastStation}</StyledP>
      <br />
      <StyledButton>
        <StyledA href={`/buyTicket/${trainData.id}`}>buy Ticket</StyledA>
      </StyledButton>
    </div>
  );
};

export default TrainView;
