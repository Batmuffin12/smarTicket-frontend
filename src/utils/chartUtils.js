export const getIndexAndValuesFromContext = (context) => {
  const index = context.dataIndex;
  const value = context.dataset.data[index];
  return {
    index,
    value,
  };
};
export const getColorByAvg = ({ value, avg, colors, colorKey }) => {
  if (value > avg * 1.1 && value > avg * 0.9) {
    return colors[colorKey].aboveAvg;
  }
  if (value < avg * 1.1 && value < avg * 0.9) {
    return colors[colorKey].belowAvg;
  }
  return colors[colorKey].avg;
};
