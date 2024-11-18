const { Video } = require(`../models`);

const resolvers = {
    Query: {
        videos: async (_, { stage }) => {
            const params = stage ? { stage } : {};
            return await Video.find(params);
        },
        video: async (_, { id }) => {
            return await Video.findById(id);
        },
    },
    Mutation: {
        addVideo: async (_, { title, description, cast, releaseDate, image}) => {
            const newVideo = await Video.create({
                title,
                description,
                cast,
                releaseDate,
                image,
            });
            return newVideo;
        },
        updateVideoStage: async (_, { id, stage }) => {
            return await Video.findByIdAndUpdate(id, { stage }, { new: true });
        },
    },
};

module.exports = resolvers;