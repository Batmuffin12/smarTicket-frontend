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
};
const UserPage = () => {
  const { updateUsers, deleteUsers } = useActions(componentActions);
  const { users, loading } = useSelector(selectors);
  const usersDefs = [
    {
      headerName: "Name",
      field: "name",
      checkboxSelection: true,
      pinned: "left",
      editable: false,
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
      rowData={users?.map((user) => ({ id: user.id, ...user.data }))}
      isDataLoading={loading}
    />
  );
};

export default UserPage;
