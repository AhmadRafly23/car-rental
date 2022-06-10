import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Innova",
    "Lamborgini",
    "Avanza",
    "Innova Venturer",
    "Ferari",
    "Kijang",
    "Toyota",
    "Jazz",
    "APV",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [17, 7, 8, 20, 5, 15, 12, 3, 13],
      backgroundColor: [
        "rgba(51, 255, 87, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 136, 51, 0.2)",
        "rgba(0, 255, 255, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(219, 255, 51, 1)",
      ],
      borderColor: [
        "rgba(51, 255, 87, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 136, 51, 0.2)",
        "rgba(0, 255, 255, 1)",
        "rgba(165, 42, 42, 1)",
        "rgba(219, 255, 51, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
  return (
    <>
      <div style={{ marginBottom: "5rem" }}>
        <h4 className="text-center fw-bold mb-3">The Most Liked Car</h4>
        <Pie className="w-25 h-25 mx-auto" data={data} />
      </div>
    </>
  );
}
