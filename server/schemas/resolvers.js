const { Video } = require(`../models`);

const resolvers = {
    Query: {
        videos: async () => {
          return await Video.find().sort({ createdAt: -1 });
        },
        video: async (parent, { _id }) => {
          return await Video.findById(_id);
        },
        videosByStatus: async (parent, { status }) => {
          return await Video.find({ status }).sort({ createdAt: -1 });
        }
    },

    Mutation: {
        addVideo: async (parent, args) => {
          const video = await Video.create(args);
          return video;
        },
    
        updateVideo: async (parent, args) => {
          const video = await Video.findByIdAndUpdate(
            args._id,
            { ...args },
            { new: true }
          );
          return video;
        },
    
        deleteVideo: async (parent, { _id }) => {
          const video = await Video.findByIdAndDelete(_id);
          return video;
        },
    
        updateVideoStatus: async (parent, { _id, status }) => {
          const video = await Video.findByIdAndUpdate(
            _id,
            { status },
            { new: true }
          );
          return video;
        }
      }
};

module.exports = resolvers;