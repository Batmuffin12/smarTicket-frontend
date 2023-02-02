import { models } from "appConstants/models";
import { capitalize } from "utils/storeUtils";
import http from "./http";

const getMethods = models.reduce(
  (preValue, currentModel) => ({
    ...preValue,
    [`get${capitalize(currentModel.model)}`]: async () =>
      await http.get(currentModel.model),
  }),
  {}
);

const updateMethods = models.reduce(
  (preValue, currentModel) => ({
    ...preValue,
    [`update${capitalize(currentModel.model)}`]: async (data) => {
      return await http.patch(`${currentModel.model}/update`, { data });
    },
  }),
  {}
);

const silentLogin = async () => {
  try {
    const token = localStorage.getItem("token");
    let response = {};
    if (token) {
      const { data } = await http.post(
        "login",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      response = {
        id: data.id,
        data: data.data,
      };
    }
    return response;
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await http.post("login", {
      email,
      password,
    });
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const requests = {
  ...getMethods,
  ...updateMethods,
  silentLogin,
  login,
};

export default requests;
