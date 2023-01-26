import TableView from "components/TableView";
import Table from "components/uiKit/Table";
import { useActions } from "hooks/useAction";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";

const componentActions = {
  getUsers: actions.getUsers,
};

const selectors = (state) => ({
  users: state.Users.data.data,
});

const UserPage = () => {
  const { getUsers } = useActions(componentActions);
  const { users } = useSelector(selectors);
  const usersDefs = [
    { headerName: "Email", field: "email" },
    { headerName: "isAdmin", field: "isAdmin" },
    { headerName: "Name", field: "name" },
  ];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <TableView
      columnDefs={usersDefs}
      rowData={users?.map((user) => user.data)}
    />
  );
};

export default UserPage;
