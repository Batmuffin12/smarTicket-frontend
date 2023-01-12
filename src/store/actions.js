import { models } from "appConstants/models";
import { makeAsyncActionCreator } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";
import genericActions from "appConstants/genericActions";

const dynamicActions = genericActions
  .map((method) =>
    models.map(({ model }) => ({
      [`${method}${capitalize(model)}`]: makeAsyncActionCreator(
        `${method.toUpperCase()}_${model.toUpperCase()}`
      ),
    }))
  )
  .flat()
  .reduce((preValue, currValue) => ({ ...preValue, ...currValue }, {}));

const actions = {
  ...dynamicActions,
};

export default actions;