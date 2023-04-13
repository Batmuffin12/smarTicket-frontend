import BarGraphView from "components/BarGraphView";
import TableView from "components/TableView";
import StyledButton from "components/styles/StyledButton";
import { useActions } from "hooks/useAction";
import { useState } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import styled, { useTheme } from "styled-components";
import { findXById, findXInDataByKey } from "utils/generalUtils";

const selectors = (state) => ({
  users: state.Users.data.data,
  tickets: state.Tickets.data.data,
});
const componentActions = {
  updateTickets: actions.updateTickets,
  getTickets: actions.getTickets,
  createTickets: actions.createTickets,
  deleteTickets: actions.deleteTickets,
};

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const TicketsPage = () => {
  const { updateTickets, getTickets, createTickets, deleteTickets } =
    useActions(componentActions);
  const theme = useTheme();
  const { users, tickets } = useSelector(selectors);
  const [sortUserTickets, setSortUsersTickets] = useState({
    value: "high",
  });
  const countUserIdTickets = (id) =>
    tickets?.filter((ticket) => ticket?.data?.userId === id).length;

  const getNameById = (id) =>
    findXById({
      id,
      models: users,
    })?.data?.name;

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
  const allUserIdsTickets = tickets
    ?.map((ticket) => ticket?.data?.userId)
    ?.reduce(
      (userIdArr, currentId) =>
        userIdArr?.includes(currentId)
          ? [...userIdArr]
          : [...userIdArr, currentId],
      []
    );
  const sortedUserIdTickets = allUserIdsTickets
    ?.sort((a, b) => {
      const fixSort = sortUserTickets.value === "high" ? 1 : -1;
      const countA = countUserIdTickets(a);
      const countB = countUserIdTickets(b);
      if (countA > countB) return -1 * fixSort;
      if (countB > countA) return 1 * fixSort;
      return 0;
    })
    ?.map((id) => ({ id: id, name: getNameById(id) }));
  const top10Users = sortedUserIdTickets?.slice(
    0,
    sortedUserIdTickets?.length > 10 ? 10 : sortedUserIdTickets?.length
  );
  const data = top10Users?.reduce(
    (preUser, currentUser) => [...preUser, countUserIdTickets(currentUser?.id)],
    []
  );
  const userTicketsData = {
    labels: [
      `users who bought the ${sortUserTickets.value}est amount of tickets`,
    ],
    datasets: top10Users?.map((user, index) => ({
      label: user?.name,
      data: data ? [data[index]] : null,
      backgroundColor:
        sortUserTickets.value === "high"
          ? theme.colors.avgColors.main.aboveAvg
          : theme.colors.avgColors.main.belowAvg,
    })),
  };
  return (
    <PageWrapper>
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
          updateTickets({
            ...e,
            updates: { ...e.updates, userId, validUntil },
          });
        }}
        getItems={getTickets}
        rowData={tickets?.map((ticket) => {
          ticketNumber++;
          ticket.data.ticketNumber = ticketNumber;
          ticket.data.validUntilShow = new Date(
            ticket.data.validUntil._seconds
          );
          ticket.data.userId = getNameById(ticket.data.userId);
          return { id: ticket.id, ...ticket.data };
        })}
        addItems={(e) => {
          const { ticketNumber, validUntilShow, ...rest } = e.data;
          rest.userId = findXInDataByKey({
            models: users,
            value: e.data.userId,
            key: "name",
          })?.id;
          if (rest.userId) {
            createTickets({
              validUntil: new Date(`${validUntilShow}-01`).getTime(),
              ...rest,
            });
          } else {
            //open popUp
          }
        }}
        deleteItems={(e) => deleteTickets(e)}
      />
      <br />
      <ButtonWrapper>
        <StyledButton
          key="low"
          onClick={() => {
            getTickets();
            setSortUsersTickets({ value: "low" });
          }}
        >
          sort by low
        </StyledButton>
        <StyledButton
          key="high"
          onClick={() => {
            getTickets();
            setSortUsersTickets({ value: "high" });
          }}
        >
          sort by high
        </StyledButton>
      </ButtonWrapper>
      <BarGraphView data={userTicketsData} />
    </PageWrapper>
  );
};

export default TicketsPage;
