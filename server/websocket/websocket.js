const { Server } = require('socket.io');
const CommentControllerWebsocket = require('../controllers/websocket/comment.controller.websocket');

class Websocket{
  static init(server) {
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
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
