import React, { useState } from "react";
import { useActions } from "hooks/useAction";
import actions from "store/actions";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Table from "components/Table";

const componentActions = {
  getTrains: actions.getTrains,
  getUsers: actions.getUsers,
};

const selectors = (state) => ({
  trains: state.Trains.data.data,
  users: state.Users.data.data,
});

const AdminPage = () => {
  const { getTrains, getUsers } = useActions(componentActions);
  const { users, trains } = useSelector(selectors);

  const usersDefs = [
    { headerName: "Email", field: "email" },
    { headerName: "isAdmin", field: "isAdmin" },
    { headerName: "Name", field: "name" },
  ];

  useEffect(() => {
    getUsers();
    getTrains();
  }, []);

  return (
    <Table columnDefs={usersDefs} rowData={users?.map((user) => user.data)} />
  );
};

export default AdminPage;
