/*
  THESE ARE VALUE VALIDATORS
*/

export const emailValueSetter = (key) => (params) => {
  // TODO: create regex for email
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  // console.log(
  //   emailRegex.test(params.newValue),
  //   params.newValue,
  //   "this is in email regex"
  // );
  if (emailRegex.test(params.newValue)) {
    console.log(emailRegex.test(params.newValue), "inside if");
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
