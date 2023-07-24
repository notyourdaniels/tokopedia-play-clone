const mongoose = require('mongoose');
const config = require('../../config');

const mongoURI = `mongodb://${config().MONGO_HOST || localhost}:${config().MONGO_PORT || 27017}/${config().MONGO_DB}`;

mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

//TODO: add error handling

//TODO: import this files to server.js