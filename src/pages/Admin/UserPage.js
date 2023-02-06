import TableView from "components/TableView";
import { fixBooleanValue } from "components/uiKit/Table/fixValues";
import {
  booleanSetter,
  emailValueSetter,
} from "components/uiKit/Table/valueSetters";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  users: state.Users.data.data,
  loading: state.Users.loading,
});
const componentActions = {
  updateUsers: actions.updateUsers,
  deleteUsers: actions.deleteUsers,
  getUsers: actions.getUsers,
  createUsers: actions.createUsers,
};
const UserPage = () => {
  const { updateUsers, deleteUsers, getUsers, createUsers } =
    useActions(componentActions);
  const { users, loading } = useSelector(selectors);
  const usersDefs = [
    {
      headerName: "Name",
      field: "name",
      checkboxSelection: true,
    },
    {
      headerName: "Email",
      field: "email",
      valueSetter: emailValueSetter("email"),
    },
    {
      headerName: "isAdmin",
      field: "isAdmin",
      valueSetter: booleanSetter("isAdmin"),
      formatValue: fixBooleanValue,
    },
  ];

  console.log(users);
  return (
    <TableView
      columnDefs={usersDefs}
      title={"Users Table"}
      update={(e) => {
        updateUsers(e);
      }}
      deleteItems={(e) => {
        deleteUsers(e);
      }}
      addItems={(e) => {
        createUsers(e.data);
      }}
      getItems={() => getUsers()}
      rowData={users?.map((user) => ({ id: user.id, ...user.data }))}
      isDataLoading={loading}
    />
  );
};

export default UserPage;
