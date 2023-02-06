export const isNullOrUndefined = (value) =>
  value === null || value === undefined;

export const fileToBase64 = async (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => reject(error);
  });

export const findXById = ({ id, models }) =>
  models?.find((model) => id === model.id);

export const findXInDataByKey = ({ key, value, models }) =>
  models?.find((model) => model?.data[key] === value);
