// HTTP Module

import http from 'http';

const PORT = 5000;

const server = http.createServer();

server.on("request", (request, response) => {
    response.end("Hello There!");
});

server.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server is running on PORT : ${PORT}`);
});