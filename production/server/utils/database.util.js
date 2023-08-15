const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/tokopedia-play-clone';


mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

//TODO: add error handling

//TODO: import this files to server.js