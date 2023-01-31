import TrainView from "components/Trainview";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ViewTrainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const selectors = (state) => ({
  trains: state.Trains.data,
});

const ViewTrainsPage = () => {
  const { trains } = useSelector(selectors);
  return (
    <ViewTrainWrapper>
      {trains?.data?.map(
        (train) =>
          console.log(train) || (
            <TrainView key={train.id} id={train.id} trainData={train.data} />
          )
      )}
    </ViewTrainWrapper>
  );
};

export default ViewTrainsPage;
