import TrainView from "components/Trainview";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { findXById } from "utils/generalUtils";

const ViewTrainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const selectors = (state) => ({
  trains: state.Trains.data.data,
  trips: state.Trips.data.data,
});

const ViewTrainsPage = () => {
  const { trains, trips } = useSelector(selectors);
  return (
    <ViewTrainWrapper>
      {trains &&
        trips?.map((trip) => {
          const trainData = findXById({
            models: trains,
            id: trip.data.trainId,
          })?.data;
          return <TrainView key={trip.id} id={trip.id} trainData={trainData} />;
        })}
    </ViewTrainWrapper>
  );
};

export default ViewTrainsPage;
