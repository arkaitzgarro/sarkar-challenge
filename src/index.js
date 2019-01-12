const http = require('http');
const https = require('https');

const config = require('./config');

function handleRequest(request, response) {
  const options = {
    hostname: config.upstreamHost,
    port: 443,
    path: request.url,
    method: request.method,
    headers: request.headers
  };

  const proxy = https.request(options, function(res) {
    if (res.statusCode === 203) {
      // Next phase of the challenge
    }

    response.writeHead(res.statusCode, res.headers)
    res.pipe(response, { end: true });
  });

  proxy.on('error', console.error);
  request.pipe(proxy, { end: true });
}

http.createServer(handleRequest).listen(config.port);

console.log(`Local server listening at: http://${config.host}:${config.port}`);
