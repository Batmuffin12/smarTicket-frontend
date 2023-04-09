import BarGraph from "./uiKit/Graphs/BarGraph";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import styled from "styled-components";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Stations Graph",
    },
  },
};

const BarGraphWrapper = styled.div`
  height: 100%;
`;

const BarGraphView = ({ data }) => {
  return (
    <BarGraphWrapper>
      <BarGraph options={options} data={data} />
    </BarGraphWrapper>
  );
};

export default BarGraphView;
