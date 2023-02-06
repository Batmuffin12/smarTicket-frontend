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

const deleteMethods = models.reduce(
  (preValue, currentModel) => ({
    ...preValue,
    [`delete${capitalize(currentModel.model)}`]: async (data) => {
      const res = await http.delete(
        `${currentModel.model}?${data.map((id) => `id=${id}`).join("&")}`
      );
      return res;
    },
  }),
  {}
);

const createMethods = models.reduce(
  (preValue, currentModel) => ({
    ...preValue,
    [`create${capitalize(currentModel.model)}`]: async (data) => {
      return await http.post(`${currentModel.model}/create`, { data });
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

const register = async (userDetails) => {
  try {
    const { data } = await http.post("register", {
      ...userDetails,
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
  ...deleteMethods,
  ...createMethods,
  silentLogin,
  login,
  register,
};

export default requests;
