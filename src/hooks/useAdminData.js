import { useEffect } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import { useActions } from "./useAction";

const selectors = (state) => ({
  currentUser: state.currentUser.data,
});

const componentActions = {
  getUsers: actions.getUsers,
  getStations: actions.getStations,
};

export const useAdminData = () => {
  const { getStations, getUsers } = useActions(componentActions);
  const { currentUser } = useSelector(selectors);

  useEffect(() => {
    if (currentUser?.data?.isAdmin) {
      getStations();
      getUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
};
