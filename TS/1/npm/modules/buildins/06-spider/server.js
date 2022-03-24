const http  = require('http')
const https = require('https')
const cheerio = require('cheerio')

function filterData(data){
    console.log(data)
}

const server = http.createServer((req,res) => {
    let data =''
    http.get('http://www.meizu.com',(result) => {
        result.on('data',(chunk) =>{
            data += chunk
        })
        result.on('end',() =>{
            filterData(data)
        })
    })
})