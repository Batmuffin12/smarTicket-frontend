export const convertToInt = (str) => {
  const match = str.match(/(\d+)/);
  if (match) return parseInt(match[0]);
};
