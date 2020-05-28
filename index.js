const module1 = require('./modules/m1')
// const module2 = require('./modules/aith')
const http = require('http')
const fs = require('fs')

let person = [
    { name: "S1", age:"32" },
    { name: "S2", age:"82" },
    { name: "S3", age:"62" },
    { name: "S4", age:"52" }
]

let server = http.createServer((req, res)=>{
    // let name = module1.showName('Vrijraj Singh')
    // res.end('Hello Server is running '+ name)
    // res.setHeader('Content-type','text/html')
    // res.write(html)
    // res.json(person)
    res.end()
})

server.listen(4000, ()=>{
    console.log('Server is running on port 4000 ')
})

// fs.readFile('index.html', (err, html)=>{
//     if(err){
//         console.log(err)
//     }

//     let server = http.createServer((req, res)=>{
//         // let name = module1.showName('Vrijraj Singh')
//         // res.end('Hello Server is running '+ name)
//         res.setHeader('Content-type','text/html')
//         res.write(html)
//         res.end()
//     })
    
//     server.listen(4000, ()=>{
//         console.log('Server is running on port 4000 ')
//     })

// })



// module1.showName('Vrijraj Singh')
// module1.showAge(23)
// module2.sum(45,67)
