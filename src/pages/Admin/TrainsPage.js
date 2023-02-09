import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";
import { findXById } from "utils/generalUtils";

const selectors = (state) => ({
  trains: state.Trains.data.data,
  stations: state.Stations.data.data,
});
const componentActions = {
  updateTrains: actions.updateTrains,
  getTrains: actions.getTrains,
  createTrains: actions.createTrains,
  deleteTrains: actions.deleteTrains,
};

const TrainsPage = () => {
  const { updateTrains, getTrains, createTrains, deleteTrains } =
    useActions(componentActions);
  const { trains, stations } = useSelector(selectors);

  const trainsDefs = [
    {
      headerName: "Train Number",
      field: "trainNumber",
      pinned: "left",
      sortable: false,
      filter: false,
      checkboxSelection: true,
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
      headerName: "Train Capacity",
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
          const stationStop = findXById({
            id: station,
            models: stations,
          });
          return {
            trainId: train.id,
            stationNumber: ++stationIndex,
            stationName: stationStop?.data?.name,
            stationId: stationStop?.id,
            trainNumber: null,
            seats: null,
          };
        });
        stationIndex = 0;
        returnedData[0] = {
          ...returnedData[0],
          trainNumber: trainData.trainNumber,
          seats: trainData.seats,
        };
        return returnedData;
      })
      .flat();
  };

  // const updateData = (e) => {};

  return (
    <TableView
      columnDefs={trainsDefs}
      title={"Trains Table"}
      update={(e) => updateTrains(e)}
      getItems={() => getTrains()}
      addItems={(e) => createTrains(e.data)}
      deleteItems={(e) => console.log(e) || deleteTrains(e)}
      rowData={trains ? rowDataOrganize() : []}
    />
  );
};

export default TrainsPage;
