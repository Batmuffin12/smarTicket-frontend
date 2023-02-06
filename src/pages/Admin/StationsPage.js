import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  stations: state.Stations.data.data,
});
const componentActions = {
  updateStations: actions.updateStations,
  getStations: actions.getStations,
  createStations: actions.createStations,
  deleteStations: actions.deleteStations,
};
const StationsPage = () => {
  const { updateStations, getStations, createStations, deleteStations } =
    useActions(componentActions);
  const { stations } = useSelector(selectors);
  const stationsDefs = [
    {
      headerName: "Station Number",
      pinned: "left",
      field: "stationNumber",
      checkboxSelection: true,
    },
    {
      headerName: "Name",
      field: "name",
    },
  ];
  let stationNumber = 0;
  return (
    <TableView
      columnDefs={stationsDefs}
      title={"Stations Table"}
      update={(e) => updateStations(e)}
      getItems={(e) => getStations()}
      addItems={(e) => createStations(e.data)}
      deleteItems={(e) => deleteStations(e)}
      rowData={stations?.map((station) => {
        stationNumber++;
        station.data.stationNumber = stationNumber;
        return { id: station.id, ...station.data };
      })}
    />
  );
};

export default StationsPage;
