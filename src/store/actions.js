import genericActions from "appConstants/genericActions";
import { models } from "appConstants/models";
import { makeActionCreator, makeAsyncActionCreator } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";

const dynamicActions = genericActions
  .map((method) =>
    models.map(({ model }) => ({
      [`${method}${capitalize(model)}`]: makeAsyncActionCreator(
        `${method.toUpperCase()}_${model.toUpperCase()}`
      ),
    }))
  )
  .flat()
  .reduce((preValue, currValue) => ({ ...preValue, ...currValue }), {});

const actions = {
  ...dynamicActions,
  init: makeActionCreator("INIT"),
  login: makeAsyncActionCreator("LOGIN"),
  signOut: makeActionCreator("SIGN_OUT"),
  silentLogin: makeAsyncActionCreator("SILENT_LOGIN"),
  setPopUpState: makeActionCreator("SET_POPUP_STATE"),
  register: makeAsyncActionCreator("REGISTER"),
  setTheme: makeActionCreator("SET_THEME"),
  sendContactUsEmail: makeAsyncActionCreator("SEND_CONTACT_EMAIL"),
};

export default actions;
