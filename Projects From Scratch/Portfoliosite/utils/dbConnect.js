import mongoose from 'mongoose';

const connect = {}

async function dbConnect() {
    if (connect.isConnected) {
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    connect.isConnected = db.connections[0].readyState;
    console.log(connect.isConnected)
}

export default dbConnect