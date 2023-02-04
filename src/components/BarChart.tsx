import { useRef } from "react";
import { useTheme } from "@mui/material";
import { Box } from "@mui/material";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
const BarChart = ({ isDashboard = false }) => {
  const ref = useRef();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        type: "line" as const,
        label: "Dataset 1",
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 2,
        fill: false,
        data: {
          January: 130,
          February: 231,
          March: 232,
          April: 453,
          May: 455,
          June: 354,
          July: 566,
        },
      },
      {
        type: "bar" as const,
        label: "Dataset 2",
        backgroundColor: "rgb(75, 192, 192)",
        data: {
          January: 130,
          February: 134,
          March: 223,
          April: 523,
          May: 545,
          June: 324,
          July: 546,
        },
        borderColor: "white",
        borderWidth: 2,
      },
      {
        type: "bar" as const,
        label: "Dataset 3",
        backgroundColor: "rgb(53, 162, 235)",
        data: {
          January: 130,
          February: 123,
          March: 552,
          April: 567,
          May: 58,
          June: 394,
          July: 506,
        },
      },
    ],
  };
  return (
    <Box>
      <Chart className="bar-chart" type="bar" data={data} />
    </Box>
  );
};

export default BarChart;
