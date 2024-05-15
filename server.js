import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try {
        if(req.method === 'GET') {
            
                if (req.url === "/") {
                    res.writeHead(200, {'content-type': 'text-html'});
                    res.end('<div><h2>Hello</h2> <h1>This is homepage</h1></div>');
               } else if (req.url === "/about") {
                  res.writeHead(200, {'content-type': 'text/html'});
                    res.end("<h1>Hello This is a about page</h1");
               } else{ res.writeHead(404, {'content-type': 'text-html'});
               res.end("<h1>Not found</h1>");}
             
        } else {
            throw new Error("Method not allowed")
        }
    }catch(error) {
        res.writeHead(500, {'content-type': 'text-plain'});
        res.end("Server Error")
    }
});

server.listen(PORT, () => {
     console.log(`The server is running in ${PORT}`);
});
