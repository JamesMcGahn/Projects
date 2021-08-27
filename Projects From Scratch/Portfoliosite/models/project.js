import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: [true, 'Add a Title'],
        trim: true,
    },
    description: {
        type: 'string',
        required: [true, 'Add a Description'],
        trim: true,
    },
    imageUrl: {
        type: 'string',
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    gitUrl: {
        type: 'string',
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    liveUrl: {
        type: 'string',
        required: [true, 'Add a Image Url'],
        trim: true,
    },
})

module.exports = mongoose.models.Project || mongoose.model('Project', ProjectSchema)