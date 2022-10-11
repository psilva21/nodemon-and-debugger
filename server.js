const http = require('http')

const app = http.createServer(function(req, res, next) {
    if (req.url === '/') { 
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Pagina de teste</title></head>')
        res.write('<body><p>texto de teste <button>clicar</button</body>')
        res.write('</html>')
        res.end()
    }

    if (req.url === '/test') {
        const message = 'Esse foi um teste'


        res.statusMessage = 200
        res.end(message)
    }
})


app.listen(8000, function () {
    console.log('server running')
})