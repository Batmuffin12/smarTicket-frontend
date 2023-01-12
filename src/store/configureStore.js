import reducers from "./reducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import epics from "./epics";

const rootReducer = combineReducers({
  ...reducers,
});

const rootEpic = combineEpics(...epics);

export default function configureStore({ history }) {
  const epicMiddleware = createEpicMiddleware({ dependencies: history });

  const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
}
