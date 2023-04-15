export const validItems = ({ items, obj, validFuncs, setPopUpState }) => {
  const isValidFuncs = validFuncs
    ? validFuncs.reduce(
        (isValid, validFunc) => isValid && validFunc(obj, setPopUpState),
        true
      )
    : true;
  return (
    items.every((key) => (obj ? (obj[key] ? true : false) : false)) &&
    isValidFuncs
  );
};

export const validateEmail = ({ email = null }, setPopUpState) => {
  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (emailRegex.test(email)) return true;
  setPopUpState({
    text: "email must contain '@' and '.'",
    open: true,
    success: false,
  });
  return false;
};

export const validatePassword = (
  { password = null, confirmPassword = null },
  setPopUpState
) => {
  const passRegex = /^[A-Za-z]\w{7,14}$/;
  if (password === confirmPassword && passRegex.test(password)) return true;
  setPopUpState({
    text: "both passwords must be the same, and password must contain 7-14 characters",
    open: true,
    success: false,
  });
  return false;
};

export const validateCreditNumber = ({ cardNum = null }, setPopUpState) => {
  const cardNumberRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  if (cardNumberRegex.test(cardNum)) return true;
  setPopUpState({
    text: "card number must be visa",
    open: true,
    success: false,
  });
  return false;
};

export const validateCreditCSC = ({ cardCSC = null }, setPopUpState) => {
  if (cardCSC?.length >= 3 && cardCSC?.length <= 4) return true;
  setPopUpState({
    text: "card CSC must be 3-4 numbers",
    open: true,
    success: false,
  });
  return false;
};
