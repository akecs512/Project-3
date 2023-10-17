import { gql } from "@apollo/client";

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
      name
      workouts {
        _id
        workoutTitle
        workoutDate
        workoutDuration
        note
        category
      }
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      workouts {
        _id
        workoutTitle
        workoutDate
        workoutDuration
        note
        category
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      workouts {
        _id
        workoutTitle
        workoutDate
        workoutDuration
        note
        category
      }
    }
  }
`;
export const QUERY_WORKOUT = gql`
  query workout($workoutId: ID!) {
    workout(workoutId: $workoutId) {
      _id
      note
      workoutDate
      workoutDuration
      workoutTitle
      category
    }
  }
`;
