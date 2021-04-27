var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//
var proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  console.log(req.url);
  if(req.url.indexOf('service-1')!==-1){
      proxy.web(req, res, { target: 'http://svc1:3001' });
    }else{
      proxy.web(req, res, { target: 'http://svc2:3002' });
  }
});

console.log("listening on port 3000")
server.listen(3000);