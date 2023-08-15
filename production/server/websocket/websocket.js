const { Server } = require('socket.io');
const CommentControllerWebsocket = require('../controllers/websocket/comment.controller.websocket');

const wsPort = process.env.WEB_PORT || 80;

class Websocket{
  static init(server) {
    const io = new Server(server, {
      cors: {
        origin: `http://localhost:${wsPort}`,
        methods: ["GET", "POST"],
      },
    });

    io.on('connection', Websocket.handleConnection);
  }

  static handleConnection(socket) {
    CommentControllerWebsocket.handleCommentEvents(socket);
  }
}

module.exports = Websocket;
