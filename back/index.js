const express = require('express');
const { createServer } = require('node:http');
const { connect } = require('node:http2');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();

let room = "";

const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
    }
});

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on("connection", socket => {

    socket.on("disconnect", () => {
        io.emit("disconnected", socket.id);
    });
    
    socket.on("message", msg => {
        io.emit("message", msg);
        console.log(msg);
    });
    
    socket.on("user", user => {
        io.emit("user", user);
        // console.log(user);
    });
    
    socket.on("search", hash => {
        console.log(socket.rooms);
        io.emit("search", hash);
        socket.join(hash);
        room = hash;
    });

    socket.on("chatting", message => {
        io.to(room).emit("chatting", message);
    });

});

server.listen(5050, () => {
    console.log('server running at http://localhost:5050');
});