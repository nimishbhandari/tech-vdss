const mongoose = require('mongoose');

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify: false
    })

    console.log(`MongoDB Connected: ${connection.connection.host}`)
}

module.exports = connectDB;