export const validItems = ({ items, obj, validFuncs }) => {
  return items.every((key) => (obj ? (obj[key] ? true : false) : false)) &&
    validFuncs
    ? validFuncs.reduce((isValid, validFunc) => isValid && validFunc(obj), true)
    : true;
};

export const validateEmail = ({ email }) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
};

export const validatePassword = ({ password, confirmPassword }) => {
  const passRegex = /^[A-Za-z]\w{7,14}$/;
  return password === confirmPassword && passRegex.test(password);
};

export const validateCreditNumber = ({ cardNum }) => {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  return cardNumberRegex.test(cardNum);
};

export const validateCreditCSC = ({ cardCSC }) => {
  return cardCSC.length >= 3 && cardCSC.length <= 4;
};
