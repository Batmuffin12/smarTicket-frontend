export const fixBooleanValue = (value) =>
  value === "true" ? true : value === "false" ? false : null;
