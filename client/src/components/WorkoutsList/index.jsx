import { Link } from "react-router-dom";
import {
  workoutCategoriesBgColors,
  workoutCategoriesForeColors,
} from "../../utils/categories";
import { capitalize } from "lodash";

const WorkoutsList = ({ workouts: serializedWorkouts, title }) => {
  if (!serializedWorkouts.length) {
    return <h3>No Workouts Yet</h3>;
  }
   console.log(serializedWorkouts)
  const workouts = serializedWorkouts.map((workout) => workout);

  return (
    <div>
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {workouts &&
          workouts.map((workout, index) => (
            <div key={index} className="col-12 col-xl-6">
              <div className="card-list mb-3">
                <h4
                  className={`card-header text-light p-2 m-0 ${
                    workoutCategoriesBgColors[workout.category]
                  } `}
                >
                  {capitalize(workout.name)} {workout.date}
                </h4>
                <Link
                  className={`btn ${
                    workoutCategoriesForeColors[workout.category]
                  } btn-block btn-squared btn-light text-dark`}
                  to={`/workouts/${workout._id}`}
                  state={{ from: workout }}
                >
                  View this workout.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WorkoutsList;
