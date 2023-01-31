import { ofType } from "redux-observable";
import { mergeMap } from "rxjs/operators";
import actions from "store/actions";

export const init = (action$) => {
  return action$.pipe(
    ofType(actions.init),
    mergeMap(() => [
      actions.silentLogin(),
      actions.getTrains(),
      actions.getStations(),
      actions.getTrips(),
      actions.getTickets(),
    ])
  );
};
