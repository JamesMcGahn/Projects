import mongoose from 'mongoose';

const connect = {}

async function dbConnect() {
    if (mongoose.connection.readyState === 1) {
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

}

export default dbConnect