import { models } from "appConstants/models";
import { capitalize } from "utils/storeUtils";
import http from "./http";

const getMethods = models.reduce(
  (preValue, currentModel) => ({
    ...preValue,
    [`get${capitalize(currentModel.model)}`]: () =>
      http.get(currentModel.model),
  }),
  {}
);

const requests = {
  ...getMethods,
};

export default requests;
