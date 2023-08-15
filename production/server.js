const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); // Add this line

dotenv.config();

const app = express();
app.use(cors());

const server = http.createServer(app);

const port = process.env.PORT || 3000;

const db = require('./server/utils/database.util');
const commentRoutes = require('./server/routes/comment.routes');
const productRoutes = require('./server/routes/product.routes');
const videoRoutes = require('./server/routes/video.routes');
const apiUrl = '/api/v1';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (React app)
app.use(express.static(path.join(__dirname, 'dist')));

app.use(apiUrl, commentRoutes);
app.use(apiUrl, productRoutes);
app.use(apiUrl, videoRoutes);

// socket.io
const Websocket = require('./server/websocket/websocket');
Websocket.init(server);

// Serve the React app's index.html for any unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

server.listen(port, () => {
  console.log(`tokopedia-play-clone is listening on port ${port}`);
});
