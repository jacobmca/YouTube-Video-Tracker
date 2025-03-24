const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Video {
    _id: ID
    title: String!
    image: String!
    description: String
    cast: [String]
    releaseDate: String
    status: String!
    createdAt: String
  }

  type Query {
    videos: [Video]
    video(_id: ID!): Video
    videosByStatus(status: String!): [Video]
  }

  type Mutation {
    addVideo(
      name: String!
      image: String!
      description: String!
      cast: [String]
      releaseDate: String
      status: String!
    ): Video

    updateVideo(
      _id: ID!
      name: String
      image: String
      description: String
      cast: [String]
      releaseDate: String
      status: String
    ): Video

    deleteVideo(_id: ID!): Video

    updateVideoStatus(_id: ID!, status: String!): Video
  }
`;

module.exports = typeDefs;
