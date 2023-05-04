/*
  THESE ARE VALUE VALIDATORS
*/

export const emailValueSetter = (key) => (params) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegex.test(params.newValue)) {
    params.data[key] = params.newValue;
    return true;
  }
  return false;
};

export const booleanSetter = (key) => (params) => {
  if (params.newValue === "false") {
    params.data[key] = false;
    return true;
  }
  if (params.newValue === "true") {
    params.data[key] = true;
    return true;
  }
  console.log("returning false");
  return false;
};
