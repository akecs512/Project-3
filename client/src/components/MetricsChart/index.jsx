import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ["Strength/Resistance", "Cardio/Aerobics", "Flexibility"],
  datasets: [
    {
      label: "# workouts",
      data: [10,9,4],
      backgroundColor: [
        "rgba(26, 142, 121, 1)",
        "rgba(137, 82, 127, 1)",
        "rgba(25, 161, 252, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",

      ],
      borderWidth: 1,
    },
  ],
};

const MetricsChart = () => {
  const { data } = useQuery(QUERY_ME);
  const workouts = data?.me?.workouts || [];
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const parsedWorkouts =
      workouts.length > 0 ? workouts.map((workout) => JSON.parse(workout)) : [];
    // console.table(parsedWorkouts);

    const strengthCount = parsedWorkouts.reduce((counter, current) => {
      if (current.category === "Strength/Resistance") counter += 1;
      return counter;
    }, 0);
    setCounter(strengthCount);
    // console.log(strengthCount);

    const cardioCount = parsedWorkouts.reduce((counter, current) => {
      if (current.category === "Cardio/Aerobic") counter += 1;
      return counter;
    }, 0);
    setCounter(cardioCount);
    // console.log(cardioCount);

    const flexCount = parsedWorkouts.reduce((counter, current) => {
      if (current.category === "Flexibility") counter += 1;
      return counter;
    }, 0);
    setCounter(flexCount);
    // console.log(flexCount);
  }, [workouts]);

  // console.log(workouts.length > 0 ? JSON.parse(workouts[0]) : "no workouts");

  return (
    <>
      <div>Metrics</div>
      <div className="flex justify-center">
        {/* <span>{counter}</span> */}
        <div className="w-96 h-96 justify-self-center">
          <Pie data={chartData} />
        </div>
      </div>
    </>
  );
};

export default MetricsChart;
