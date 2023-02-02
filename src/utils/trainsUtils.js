export const findStationByID = ({ trainStationId, stations }) => {
  return stations?.find((station) => trainStationId === station.id);
};
