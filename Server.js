const http = require('http');

var contador = 0;

const handleServer =  function(req, res) { 
    res.writeHead(200, { 'content-type' : 'text/html'});
    res.write(`<h1>Number of requests ${contador++}</h1>`);
    res.end();
}

const server = http.createServer(handleServer);
const port = 1234;


server.listen(port, function() {
    console.log(`Server listening at port ${port}`);
});