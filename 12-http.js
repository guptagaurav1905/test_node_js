// HTTP

const http = require('http')

const server = http.createServer((req , res)=> {
    if(req.url === '/'){
        res.end('Welcome ')
    }
    else if(req.url === '/about'){
        res.end('Here is Nothig')
    }else{
        res.end('blah')
    }
})    

server.listen(8000)