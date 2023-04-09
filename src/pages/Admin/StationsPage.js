import BarGraphView from "components/BarGraphView";
import TableView from "components/TableView";
import { useActions } from "hooks/useAction";
import { useState } from "react";
import { useSelector } from "react-redux";
import actions from "store/actions";
import styled, { useTheme } from "styled-components";
import { getColorByAvg, getIndexAndValuesFromContext } from "utils/chartUtils";
import { findXById, getAvgByKey } from "utils/generalUtils";

const selectors = (state) => ({
  stations: state.Stations.data.data,
});

const componentActions = {
  updateStations: actions.updateStations,
  getStations: actions.getStations,
  createStations: actions.createStations,
  deleteStations: actions.deleteStations,
};

const Wrapper = styled.div`
  height: 100%;
`;

const StationsPage = () => {
  const { updateStations, getStations, createStations, deleteStations } =
    useActions(componentActions);
  const theme = useTheme();
  const { stations } = useSelector(selectors);
  const [sortObject, setSortObject] = useState({
    key: "entries",
    value: "high",
  });

  const sortedStations = sortObject.value
    ? stations?.sort((a, b) => {
        if (sortObject.value === "high") {
          return b.data[sortObject.key] - a.data[sortObject.key];
        }
        return a.data[sortObject.key] - b.data[sortObject.key];
      })
    : stations;

  const stationsDefs = [
    {
      headerName: "Station Number",
      pinned: "left",
      field: "stationNumber",
      checkboxSelection: true,
    },
    {
      headerName: "Name",
      field: "name",
    },
    {
      headerName: "Entries",
      field: "entries",
    },
    {
      headerName: "Leaves",
      field: "leaves",
    },
  ];

  let stationNumber = 0;
  const graphLabels = sortedStations?.map((station) => station.data.name) || [];
  const avgGraphData = {
    entries: getAvgByKey({ models: stations, key: "entries" }),
    leaves: getAvgByKey({ models: stations, key: "leaves" }),
  };
  const graphData = {
    labels: graphLabels,
    datasets: [
      {
        label: "entries",
        data: sortedStations?.map((station) => station.data.entries),
        backgroundColor: (context) => {
          const { value } = getIndexAndValuesFromContext(context);
          return getColorByAvg({
            value,
            avg: avgGraphData.entries,
            colors: theme.colors.avgColors,
            colorKey: "main",
          });
        },
      },
      {
        label: "leaves",
        data: sortedStations?.map((station) => station.data.leaves),
        backgroundColor: (context) => {
          const { value } = getIndexAndValuesFromContext(context);
          return getColorByAvg({
            value,
            avg: avgGraphData.leaves,
            colors: theme.colors.avgColors,
            colorKey: "secondary",
          });
        },
      },
    ],
  };
  return (
    <Wrapper>
      <TableView
        columnDefs={stationsDefs}
        title={"Stations Table"}
        update={(e) => {
          const station = findXById({ models: stations, id: e.id })?.data;
          e.updates = {
            ...e.updates,
            entries: Number(e.updates.entries) || station.entries,
            leaves: Number(e.updates.leaves) || station.leaves,
          };
          updateStations(e);
        }}
        getItems={(e) => getStations()}
        addItems={(e) => createStations({ name: e.data.name })}
        deleteItems={(e) => deleteStations(e)}
        rowData={stations?.map((station) => {
          stationNumber++;
          station.data.stationNumber = stationNumber;
          return { id: station.id, ...station.data };
        })}
      />
      <BarGraphView data={graphData} />
    </Wrapper>
  );
};

export default StationsPage;
