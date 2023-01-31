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
};
const StationsPage = () => {
  const { updateStations, getStations } = useActions(componentActions);
  const { stations } = useSelector(selectors);
  const stationsDefs = [
    {
      headerName: "Station Number",
      pinned: "left",
      field: "stationNumber",
      checkboxSelection: true,
      editable: false,
    },
    {
      headerName: "Name",
      field: "name",
      editable: false,
    },
  ];
  let stationNumber = 0;
  return (
    <TableView
      columnDefs={stationsDefs}
      title={"Stations Table"}
      update={(e) => {}}
      rowData={stations?.map((station) => {
        stationNumber++;
        station.data.stationNumber = stationNumber;
        return (
          console.log(station, "in map") || { id: station.id, ...station.data }
        );
      })}
    />
  );
};

export default StationsPage;
