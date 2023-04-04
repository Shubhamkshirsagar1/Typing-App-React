import React, { useContext } from "react";
import { Line } from "react-chartjs-2";

import {
  CategoryScale, //x axis
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale, //y axis
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { ThemeContext } from "../Context/ThemeContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graphs = ({ graphData }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Line
        data={{
          // x axis
          labels: graphData.map((i) => {
            return i[0];
          }),
          //y axis
          datasets: [
            {
              label: "WPM",
              data: graphData.map((i) => i[1]),
              borderColor: theme.title,
            },
          ],
        }}
      />
    </>
  );
};

export default Graphs;
