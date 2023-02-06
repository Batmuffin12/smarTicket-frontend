import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";
import { findXById, findXInDataByKey } from "utils/generalUtils";

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
    },
    {
      headerName: "user Name",
      field: "userId",
    },
    {
      headerName: "Trip ID",
      field: "tripId",
    },
    {
      headerName: "Valid until",
      field: "validUntilShow",
    },
  ];
  let ticketNumber = 0;
  return (
    <TableView
      columnDefs={stationsDefs}
      title={"Tickets Table"}
      update={(e) => {
        const userId = e.updates?.userId
          ? findXInDataByKey({
              models: users,
              key: "name",
              value: e.updates.userId,
            })?.id
          : findXById({ models: tickets, id: e.id })?.data.userId;
        const validUntil = e.updates?.validUntilShow
          ? new Date(e.updates.validUntilShow).getTime()
          : findXById({ models: tickets, id: e.id })?.data.validUntil;
        updateTickets({ ...e, updates: { ...e.updates, userId, validUntil } });
      }}
      getItems={getTickets}
      rowData={tickets?.map((ticket) => {
        ticketNumber++;
        ticket.data.ticketNumber = ticketNumber;
        ticket.data.validUntilShow = new Date(ticket.data.validUntil._seconds);
        ticket.data.userId = users?.find(
          (user) => user.id === ticket.data.userId
        )?.data?.name;
        return { id: ticket.id, ...ticket.data };
      })}
    />
  );
};

export default TicketsPage;
