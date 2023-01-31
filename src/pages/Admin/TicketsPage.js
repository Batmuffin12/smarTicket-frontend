import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  users: state.Users.data.data,
  tickets: state.Tickets.data.data,
});
const componentActions = {
  updateTickets: actions.updateTickets,
  getTickets: actions.getTickets,
};
const TicketsPage = () => {
  const { updateTickets, getTickets } = useActions(componentActions);
  const { users, tickets } = useSelector(selectors);
  const stationsDefs = [
    {
      headerName: "Ticket Number",
      pinned: "left",
      field: "ticketNumber",
      checkboxSelection: true,
      editable: false,
    },
    {
      headerName: "user Name",
      field: "userName",
      editable: false,
    },
    {
      headerName: "Trip ID",
      field: "tripId",
      editable: false,
    },
    {
      headerName: "Valid until",
      field: "validUntilShow",
      editable: false,
    },
  ];
  let ticketNumber = 0;
  return (
    <TableView
      columnDefs={stationsDefs}
      title={"Tickets Table"}
      update={(e) => {}}
      rowData={tickets?.map((ticket) => {
        ticketNumber++;
        ticket.data.ticketNumber = ticketNumber;
        ticket.data.validUntilShow = new Date(ticket.data.validUntil._seconds);
        ticket.data.userName = users?.find(
          (user) => user.id === ticket.data.userId
        )?.data?.name;
        return (
          console.log(ticket, "in map") || { id: ticket.id, ...ticket.data }
        );
      })}
    />
  );
};

export default TicketsPage;
