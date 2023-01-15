import React, { useState } from "react";
import StyledTrainView from "../components/styles/StyledTrainView";

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
  ]; //fetch data
  const [trainArr, setTrainArr] = useState(fetchData);
  return (
    <div>
      {trainArr.map((trainData) => (
        <StyledTrainView
          key={trainData.id}
          trainData={trainData}
          setTrainArr={setTrainArr}
        />
      ))}
    </div>
  );
};

export default ViewTrainsPage;
