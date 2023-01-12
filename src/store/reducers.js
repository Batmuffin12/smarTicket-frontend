import { models } from "appConstants/models";
import { composeReducers, makeAsyncReducer } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";
import actions from "./actions";

const dynamicReduces = models.map(({ model, customerMethodName }) => ({
  [model]: composeReducers(
    makeAsyncReducer(actions[customerMethodName || `get${capitalize(model)}`], {
      defaultData: [],
    })
  ),
}));

const reducers = {
  ...dynamicReduces,
};

export default reducers;
