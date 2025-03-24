import { gql } from '@apollo/client';

export const ADD_VIDEO = gql`
  mutation AddVideo(
    $name: String!
    $image: String!
    $description: String!
    $cast: [String]
    $releaseDate: String
    $status: String!
  ) {
    addVideo(
      name: $name
      image: $image
      description: $description
      cast: $cast
      releaseDate: $releaseDate
      status: $status
    ) {
      _id
      name
      image
      description
      cast
      releaseDate
      status
      createdAt
    }
  }
`;
