import { models } from "appConstants/models";
import { composeReducers, makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";
import mainTheme from "theme/mainTheme";
import actions from "./actions";

const dynamicReduces = models
  .map(({ model, customMethodName }) => ({
    [model]: composeReducers(
      makeAsyncReducer(actions[customMethodName || `get${capitalize(model)}`], {
        defaultData: [],
      }),
      makeAsyncReducer(
        actions[customMethodName || `update${capitalize(model)}`],
        {
          defaultData: [],
          shouldDestroyData: false,
          shouldDestroyDataOnError: false,
          dataGetter: ({ data }, { payload }) => {
            const result = data?.data
              ? [
                  ...data?.data.map((x) => {
                    return payload?.data?.id === x.id
                      ? {
                          id: x.id,
                          data: {
                            ...payload.data.data,
                          },
                        }
                      : {
                          id: x.id,
                          data: { ...x.data },
                        };
                  }),
                ]
              : [];
            return { data: result };
          },
        }
      ),
      makeAsyncReducer(
        actions[customMethodName || `delete${capitalize(model)}`],
        {
          defaultData: [],
          shouldDestroyData: false,
          shouldDestroyDataOnError: false,
          dataGetter: ({ data }, { payload }) => {
            return {
              data: data.data.filter((item) => !payload.data.includes(item.id)),
            };
          },
        }
      ),
      makeAsyncReducer(
        actions[customMethodName || `create${capitalize(model)}`],
        {
          defaultData: [],
          shouldDestroyData: false,
          shouldDestroyDataOnError: false,
          dataGetter: ({ data }, { payload }) => {
            console.log(data.data);
            const newItem = { ...payload.data };
            return {
              data: [...data.data, newItem],
            };
          },
        }
      )
    ),
  }))
  .reduce((prev, curr) => ({ ...prev, ...curr }), {});

const reducers = {
  ...dynamicReduces,
  currentUser: composeReducers(
    makeAsyncReducer(actions.silentLogin, {
      defaultData: undefined,
    }),
    makeAsyncReducer(actions.login, {
      defaultData: undefined,
    }),
    makeReducer(
      {
        [actions.signOut]: (state, { payload }) => {
          localStorage.setItem("token", null);
          return null;
        },
      },
      {
        defaultState: undefined,
      }
    ),
    makeAsyncReducer(actions.register, {
      defaultData: undefined,
      dataGetter: ({ data }, { payload }) => {
        localStorage.setItem("token", payload.data.token);
        return payload;
      },
    })
  ),
  popUp: makeReducer(
    {
      [actions.setPopUpState]: (state, { payload }) => {
        return { ...state, ...payload };
      },
    },
    {
      defaultState: {
        open: false,
        text: null,
        success: false,
      },
    }
  ),
  theme: makeReducer(
    {
      [actions.setTheme]: (state, { payload }) => {
        return { ...state, ...payload };
      },
    },
    {
      defaultState: { theme: mainTheme },
    }
  ),
  contactUsEmail: makeAsyncReducer(actions.sendContactUsEmail, {
    defaultData: undefined,
    dataGetter: ({ data }, { payload }) => payload,
  }),
};

export default reducers;
