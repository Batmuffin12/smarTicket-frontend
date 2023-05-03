import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  trains: state.Trains.data.data,
  trips: state.Trips.data.data,
});
const componentActions = {
  updateTrips: actions.updateTrips,
  getTrips: actions.getTrips,
  deleteTrips: actions.deleteTrips,
  createTrips: actions.createTrips,
};
const TripsPage = () => {
  const { updateTrips, getTrips, deleteTrips, createTrains } =
    useActions(componentActions);
  const { trains, trips } = useSelector(selectors);
  const stationsDefs = [
    {
      headerName: "Trip Number",
      pinned: "left",
      field: "tripNumber",
      checkboxSelection: true,
      editable: false,
    },
    {
      headerName: "Train Number",
      field: "trainNumber",
      editable: false,
    },
    {
      headerName: "Remaining Seats",
      field: "remainingSeats",
      editable: false,
    },
    {
      headerName: "Leaving Time",
      field: "leavingTimeShow",
      editable: false,
    },
  ];
  let tripNumber = 0;
  return (
    <TableView
      columnDefs={stationsDefs}
      title={"Trips Table"}
      update={(e) => {
        updateTrips(e);
      }}
      getItems={(e) => getTrips(e)}
      deleteItems={(e) => deleteTrips(e)}
      addItems={(e) => createTrains(e.data)}
      rowData={trips?.map((trip) => {
        tripNumber++;
        trip.data.tripNumber = tripNumber;
        trip.data.leavingTimeShow = new Date(trip.data.leavingTime._seconds);
        trip.data.trainNumber = trains?.find(
          (train) => train.id === trip.data.trainId
        )?.data?.trainNumber;
        return console.log(trips, "in map") || { id: trip.id, ...trip.data };
      })}
    />
  );
};

export default TripsPage;
