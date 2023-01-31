import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";
import { findStationByID } from "utils/trainsUtils";

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
      sortable: false,
      filter: false,
    },
    {
      headerName: "Station Number",
      field: "stationNumber",
      sortable: false,
      filter: false,
    },
    {
      headerName: "Station",
      field: "stationName",
      sortable: false,
      filter: false,
    },
    {
      headerName: "Remaining Seats",
      field: "seats",
    },
  ];

  const rowDataOrganize = () => {
    let stationIndex = 0;
    return trains
      .map((train) => {
        const { ...data } = train;
        const trainData = data.data;
        const returnedData = trainData.stations?.map((station) => {
          const stationStop = findStationByID({
            trainStationId: station,
            stations,
          });
          return {
            trainId: train.id,
            stationNumber: ++stationIndex,
            stationName: stationStop?.data?.name,
            stationId: stationStop?.id,
          };
        });
        stationIndex = 0;
        returnedData[0] = {
          trainNumber: trainData.trainNumber,
          seats: trainData.seats,
          ...returnedData[0],
        };
        return returnedData;
      })
      .flat();
  };

  return (
    <TableView
      columnDefs={trainsDefs}
      title={"Trains Table"}
      update={(e) => {}}
      rowData={trains ? rowDataOrganize() : []}
    />
  );
};

export default TrainsPage;
