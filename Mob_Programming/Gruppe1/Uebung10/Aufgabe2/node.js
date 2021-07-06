let http = require('http');
let url = require('url');

http.createServer(function (req, res) {

    const q = url.parse(req.url, true);
    let groesse = q.query.groesse;
    let gewicht = q.query.gewicht;
    console.log(gewicht);
    let ergebnis = gewicht / (groesse /100 * groesse/100) ;
    res.writeHead(200, {'Content-Type': 'text/plain', "Access-Control-Allow-Origin":"*"});
    res.write(ergebnis.toFixed(2).toString());
    res.end();
}).listen(8080);