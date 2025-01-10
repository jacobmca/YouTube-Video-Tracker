const { Video } = require('../models');

module.exports = {
    getAllVideos: async () => await Video.find(),
    getVideoById: async (id) => await Video.findById(id),
    createVideo: async (videoData) => await Video.create(videoData),
    updateVideoStage: async (id, stage) => 
        await Video.findByIdAndUpdate(id, { stage }, { new: true }),
};