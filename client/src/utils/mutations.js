import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const ADD_WORKOUT = gql`
  mutation AddWorkout($workoutTitle: String!, $workoutDate: String!, $workoutDuration: String!, $comment: String, $category: String!) {
  addWorkout(workoutTitle: $workoutTitle, workoutDate: $workoutDate, workoutDuration: $workoutDuration, comment: $comment, category: $category ) {
    workouts {
      _id
      workoutTitle
      workoutDate
      workoutDuration
      comment
      category
    }
  }
}
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        name
      }
    }
  }
`;

export const REMOVE_WORKOUT = gql`
  mutation removeWorkout($workout: String!) {
    removeWorkout(workout: $workout) {
      _id
      name
      workouts
    }
  }
`;
export const UPDATE_WORKOUT = gql`
  mutation updateWorkout($workout: String!) {
    updateWorkout(workout: $workout) {
      _id
      name
      workouts
    }
  }
`;