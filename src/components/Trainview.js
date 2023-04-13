import { useSelector } from "react-redux";
import styled from "styled-components";
import { findXById } from "utils/generalUtils";
import StyledButton from "./styles/StyledButton";
import StyledP from "./styles/StyledP";
import api from "../services/api";
import actions from "store/actions";
import { useActions } from "hooks/useAction";

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
const selectors = (state) => ({
  stations: state.Stations.data.data,
});
const componentActions = {
  setPopUpState: actions.setPopUpState,
};
const TrainView = ({ id, trainData }) => {
  const { setPopUpState } = useActions(componentActions);
  const { stations } = useSelector(selectors);
  const buyTicketRequest = async () => {
    try {
      const { data } = await api.buyTicket(id);
      setPopUpState({
        text: data
          ? "ticket bought successfully"
          : "unable to buy a ticket check if you're signed in",
        open: true,
        success: data ? true : false,
      });
    } catch (e) {
      setPopUpState({
        text: "unable to buy a ticket",
        open: true,
        success: false,
      });
    }
  };
  return (
    <TrainViewWrapper>
      <StyledP textAlign="left">Train number: {trainData.trainNumber} </StyledP>
      <StyledP textAlign="left">
        Train first station :{" "}
        {stations
          ? findXById({
              id: trainData.startingStation,
              models: stations,
            })?.data?.name
          : ""}
      </StyledP>
      <StyledP textAlign="left">
        Train last station:{" "}
        {stations
          ? findXById({
              id: trainData.endingStation,
              models: stations,
            })?.data?.name
          : ""}
      </StyledP>
      <StyledButton onClick={buyTicketRequest}>Buy Ticket</StyledButton>
    </TrainViewWrapper>
  );
};

export default TrainView;
