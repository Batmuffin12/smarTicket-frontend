import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  trains: state.Trains.data.data,
  stations: state.Stations.data.data,
});
const componentActions = {
  updateTrains: actions.updateTrains,
  getTrains: actions.getTrains,
};

const TrainsPage = () => {
  const { updateTrains, getTrains } = useActions(componentActions);
  const { trains, stations } = useSelector(selectors);

  const trainsDefs = [
    {
      headerName: "Train Number",
      field: "trainNumber",
      pinned: "left",
    },
    {
      headerName: "Station Number",
      field: "stationNumber",
    },
    {
      headerName: "Station",
      field: "station",
    },
    {
      headerName: "Remaining Seats",
      field: "seats",
    },
  ];

  const rowDataOrganize = () => {
    let stationIndex = 0;
    let currentTrainNum = 0;
    return trains?.map((train) => {
      if (currentTrainNum === 0) {
        const { stations, ...data } = train;
        currentTrainNum = data.trainNumber;
        return {
          id: train.id,
          ...data,
        };
      } else {
        const res = train.data.stations[stationIndex]
          ? {
              id: train.id,
              station: train.data.stations[stationIndex],
              stationNumber: stationIndex,
            }
          : {};
        if (res) {
          stationIndex += 1;
        } else {
          stationIndex = 0;
          currentTrainNum = 0;
        }
        return res;
      }
    });
  };

  return (
    <TableView
      columnDefs={trainsDefs}
      title={"Trains Table"}
      update={(e) => {}}
      rowData={trains ? rowDataOrganize() : null}
    />
  );
};

export default TrainsPage;
