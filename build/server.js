// bitmachine's fixture service, built from source. Its page carries a value
// computed by its one npm dependency, so a page served proves the package set
// the build installed; its log ticks once a second.
const http = require('node:http');
const ms = require('ms');

const page = `bitmachine fixture, built from source: ${ms(90000)}\n`;

http
  .createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(page);
  })
  .listen(8080);

let tick = 0;
setInterval(() => console.log(`tick ${++tick}`), 1000);
