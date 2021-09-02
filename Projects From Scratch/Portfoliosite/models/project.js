import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Add a Title'],
        trim: true,
    },
    subtitle: {
        type: String,
        required: [true, 'Add a Subtitle'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Add a Description'],
        trim: true,
    },
    challenges: {
        type: String,
        required: [true, 'Add a Challenge'],
        trim: true,
    },
    stack: [{ type: String, required: true }],
    imageUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    gitUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    liveUrl: {
        type: String,
        required: [true, 'Add a Image Url'],
        trim: true,
    },
    adtlImg: [{ type: String, required: false }],
})

module.exports = mongoose.models.Project ? mongoose.models.Project : mongoose.model('Project', ProjectSchema)