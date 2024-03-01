const http = require('http')
const fs = require('fs/promises')

const getFiles = async () => {
    const calculatorJs = await fs.readFile('./dist/calculator.bundle.js')
    const calculatorHtml = await fs.readFile('./CALCULATOR.html')
    const calculatorCss = await fs.readFile('./calculator.css')
    return ({
        calculatorJs,
        calculatorHtml,
        calculatorCss
    })
}

http.createServer( async (request, response) => {
    const {
        calculatorJs,
        calculatorHtml,
        calculatorCss
    } = await getFiles()
    switch(request.url){
        case '/':
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(calculatorHtml)
            response.end()
            break
        case '/calculator.css':
            response.writeHead(200, {'Content-Type': 'text/css'})
            response.write(calculatorCss)
            response.end()
            break
        case '/dist/calculator.bundle.js':
            response.writeHead(200, {'Content-Type': 'text/javascript'})
            response.write(calculatorJs)
            response.end()
            break
        case '/':
            response.writeHead(404, {'Content-Type': 'text/javascript'})
            response.write("garemuwałt")
            response.end()
            break
    }
}).listen(8888)