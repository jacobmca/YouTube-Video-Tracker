import { gql } from '@apollo/client';

export const GET_VIDEOS = gql`
  query GetVideos {
    videos {
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
