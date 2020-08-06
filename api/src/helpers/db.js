const mongoose = require('mongoose');
const { db } = require("../configuration");

const options = {
    useNewUrlParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // reconnectInterval: 500,
    connectTimeoutMS: 10000,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports.connectDb = () => {
    mongoose.connect(db, options).then( function() {
        console.log('MongoDB is connected');
    })
        .catch( function(err) {
            console.log(err);
        });
    return mongoose.connection;
}