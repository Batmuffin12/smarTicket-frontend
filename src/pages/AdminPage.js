import React from "react";
import { useActions } from "hooks/useAction";
import actions from "store/actions";
import { useSelector } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import { useEffect } from "react";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-grid.css";

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

  useEffect(() => {
    getUsers();
    getTrains();
  }, []);

  useEffect(() => {
    console.log(users);
    console.log(trains);
  }, [users, trains]);

  const demo = [
    {
      email: "ofek@a.com",
      isAdmin: true,
      name: "ofek",
    },
    {
      email: "ofek@a.com",
      isAdmin: true,
      name: "ofek",
    },
    {
      email: "ofek@a.com",
      isAdmin: true,
      name: "ofek",
    },
  ];

  return (
    <div>
      <AgGridReact
        columnDefs={[
          { headerName: "Email", field: "email" },
          { headerName: "isAdmin", field: "isAdmin" },
          { headerName: "Name", field: "name" },
        ]}
        rowData={demo}
      />
      {/* {users ? users.map((user) => <p>{user.data}</p>) : <div>no data</div>} */}
      <br />
      {/* <p>{trains.data}</p> */}
    </div>
  );
};

export default AdminPage;
