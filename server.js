const express = require ('express');
const app = express ();

const config = require ('./config');
const port = config().PORT || 3000;

const db = require('./server/utils/database.util');

const commentRoutes = require('./server/routes/comment.routes');
const productRoutes = require('./server/routes/product.routes');
const videoRoutes = require('./server/routes/video.routes');

const apiUrl = '/api/v1';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(apiUrl, commentRoutes);
app.use(apiUrl, productRoutes);
app.use(apiUrl, videoRoutes);

app.listen(port , () => {
    console.log(`tokopedia-play-clone is listening on port ${port}`);
});