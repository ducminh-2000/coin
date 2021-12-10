const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

let server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public')));

app.get(['/'],(req,res) => {
    res.sendFile(path.join(__dirname,'public/trending.html'));
})

const port = process.env.PORT || 3000; 

server.listen(port, () => {
    console.log("http://localhost:" + port)
})

