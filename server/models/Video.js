const { Schema, model } = require('mongoose');

const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
    },
    cast: {
        type: [String],
    },
    releaseDate: {
        type: Date,
    },
    image: {
        type: String,
    },
    stage: {
        type: String,
        enum: ['Pre-Production', 'Production', 'Post-Production'],
        default: 'Pre-Production',
    },
});

const Video = model('Video', videoSchema);

module.exports = Video;