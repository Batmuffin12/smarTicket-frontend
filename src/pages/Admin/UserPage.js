import TableView from "components/TableView";
import {
  booleanSetter,
  emailValueSetter,
} from "components/uiKit/Table/valueSetters";
import { useActions } from "hooks/useAction";
import { useSelector } from "react-redux";
import actions from "store/actions";

const selectors = (state) => ({
  users: state.Users.data.data,
});
const componentActions = {
  updateUsers: actions.updateUsers,
  getUsers: actions.getUsers,
};
const UserPage = () => {
  const { updateUsers, getUsers } = useActions(componentActions);
  const { users } = useSelector(selectors);
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
    },
  ];
  return (
    <TableView
      columnDefs={usersDefs}
      title={"Users Table"}
      update={(e) => {
        console.log(e, users);
        console.log("now update users");
        updateUsers(e);
        //FIXME: only works for now
        console.log("now get users");
        getUsers();
      }}
      rowData={users?.map(
        (user) => console.log(user, "in map") || { id: user.id, ...user.data }
      )}
    />
  );
};

export default UserPage;
