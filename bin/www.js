const http = require("http");
const https = require("https");
const app = require("../app");
const fs = require("fs");
const env = require(`../environment/${ process.env.NODE_ENV }`);

const PORT = process.env.PORT || 80;

http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${ req.headers.host }${ req.url }` })
    res.end();
})
.listen(PORT);

https.createServer({
    key: fs.readFileSync(env.key),
    cert: fs.readFileSync(env.cert)
}, app)
.listen(443);