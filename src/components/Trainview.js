import { useSelector } from "react-redux";
import styled from "styled-components";
import { findStationByID } from "utils/trainsUtils";
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
const selectors = (state) => ({
  stations: state.Stations.data.data,
});
const TrainView = ({ id, trainData }) => {
  const { stations } = useSelector(selectors);
  return (
    <TrainViewWrapper>
      <StyledP textAlign="left">Train number: {trainData.trainNumber} </StyledP>
      <StyledP textAlign="left">
        Train first station :{" "}
        {stations
          ? findStationByID({
              trainStationId: trainData.startingStation,
              stations,
            })?.data?.name
          : ""}
      </StyledP>
      <StyledP textAlign="left">
        Train last station:{" "}
        {stations
          ? findStationByID({
              trainStationId: trainData.endingStation,
              stations,
            })?.data?.name
          : ""}
      </StyledP>
      <StyledButton>
        <StyledLink to={`/buyTicket/${id}`}>Buy Ticket</StyledLink>
      </StyledButton>
    </TrainViewWrapper>
  );
};

export default TrainView;
