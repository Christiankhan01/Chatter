const express = require('express'); 
const socketio = require('socket.io'); 
const http = require('http'); 
const router = require('./router'); 

const PORT = process.env.PORT || 5000; 

const app = express(); 
const server = http.createServer(app); 
const io = socketio(server); 

io.on('connection', (socket) => {
    console.log('New Connection created'); 
    
    socket.on('join', ({name, room}, callback) => {
        console.log(name, room); 
        
        const error = true; 
        
        if(error) {
            callback({error: 'error'}); 
        }
    }); 
    
    socket.on('disconnect', () => {
        console.log('User Disconnected'); 
    })
}); 

app.use(router); 

server.listen(PORT, () => 
    console.log(`Server running on port:  ${PORT}`)); 



