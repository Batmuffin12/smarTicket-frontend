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
    return e;
  }
};

const login = async ({ email, password }) => {
  const { data } = await http.post("login", {
    email,
    password,
  });
  return data;
};

const requests = {
  ...getMethods,
  silentLogin,
  login,
};

export default requests;
