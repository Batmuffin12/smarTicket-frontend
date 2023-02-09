import { Bar } from "react-chartjs-2";

const BarGraph = ({ options, data }) => {
  console.log(data);
  return <Bar options={options} data={data} />;
};

export default BarGraph;
