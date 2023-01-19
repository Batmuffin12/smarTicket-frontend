import { models } from "appConstants/models";
import { makeAsyncEpic } from "redux-toolbelt-observable";
import api from "services/api";
import { capitalize } from "utils/storeUtils";
import actions from "store/actions";
import genericActions from "appConstants/genericActions";

const trivials = [
  ...genericActions
    .map((method) => models.map(({ model }) => `${method}${capitalize(model)}`))
    .flat(),
  "login",
].map((name) => makeAsyncEpic(actions[name], api[name]));

export default trivials;
