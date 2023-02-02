import { models } from "appConstants/models";
import { composeReducers, makeAsyncReducer, makeReducer } from "redux-toolbelt";
import { capitalize } from "utils/storeUtils";
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
    )
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
      },
    }
  ),
};

export default reducers;
