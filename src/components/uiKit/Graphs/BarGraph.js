import { Bar } from "react-chartjs-2";

const BarGraph = ({ options, data }) => {
  return <Bar options={options} data={data} />;
};

export default BarGraph;
