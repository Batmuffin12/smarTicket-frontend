import { models } from "appConstants/models";
import { composeReducers, makeAsyncReducer } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";
import actions from "./actions";

const dynamicReduces = models
  .map(({ model, customMethodName }) => ({
    [model]: composeReducers(
      makeAsyncReducer(actions[customMethodName || `get${capitalize(model)}`], {
        defaultData: [],
      })
    ),
  }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

const reducers = {
  ...dynamicReduces,
};

export default reducers;
