const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Video {
        _id: ID
        title: String!
        description: String
        cast: [String]
        releaseDate: String
        image: String
        stage: String
    }

    type Query {
        videos(stage: String): [Video]
        video(id: ID!): Video
    }

    type Mutation {
        addVideo(title: String!, description: String, cast: [String], releaseDate: String, image: String): Video
        updateVideoStage(id: ID!, stage: String!): Video
    }
`;

module.exports = typeDefs;