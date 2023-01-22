import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export const useActions = (actions) => {
  const dispatch = useDispatch();
  return useMemo(
    () =>
      Object.keys(actions)?.reduce(
        (acc, actionProp) => ({
          ...acc,
          [actionProp]: bindActionCreators(actions[actionProp], dispatch),
        }),
        {}
      ),
    //look out for the dependencies might do some problems
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );
};
