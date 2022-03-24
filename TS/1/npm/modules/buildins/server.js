const http  = require('http')
const url = require('url')

const server = http.createServer((req,res)) = {
    let urlStr = req.url
    let urlObj = url.parse(urlStr,true)
    console.log(urlstr)
    switch(urlstr) {
        case'/api/data';
        res.write(getData('hello'))
        break;
        default;
        res.write('page not found.')
    }
    res.end()
})

server.listen(8080.() ={
    console.log('localhost:8080')
})
