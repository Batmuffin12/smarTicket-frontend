import React, { useState } from "react";
import styled from "styled-components";
import StyledTrainView from "../components/styles/StyledTrainView";

const ViewTrainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ViewTrainsPage = () => {
  const fetchData = [
    {
      number: 13,
      firstStation: "tel aviv",
      lastStation: "haifa",
      id: "1",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
    {
      number: 12,
      firstStation: "haifa",
      lastStation: "tel aviv",
      id: "2",
    },
  ]; //fetch data
  const [trainArr, setTrainArr] = useState(fetchData);
  return (
    <ViewTrainWrapper>
      {trainArr.map((trainData) => (
        <StyledTrainView
          key={trainData.id}
          trainData={trainData}
          setTrainArr={setTrainArr}
        />
      ))}
    </ViewTrainWrapper>
  );
};

export default ViewTrainsPage;
