class CommentControllerWebsocket {
    static handleCommentEvents(socket) {
      socket.on('join_commentRoom', (data) => {
        socket.join(data);
      });
  
      socket.on('newComment', (data) => {
        socket.broadcast.emit('newComment', data);
      });
  
      socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
      });
    }
  }
  
  module.exports = CommentControllerWebsocket;
  