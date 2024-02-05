import http from "http";
import fs   from "fs";
import memoize from "./Decorators/memoize/index.js";

var file = memoize((url) => fs.promises.readFile(url, "utf-8"));
file("./index.html");

var match = (value) => (key) => value[key];

var contentType = match({
  "css"  : "text/css",
  "html" : "text/html",
  "js"   : "application/javascript",
  "json" : "application/json",
});

http.createServer((request, response) => {
  var url = request.url || "/";
  if (url == "/") url = "/index.html";
  url = "." + url;

  file(url).then((html) => {
    console.log(url, file);
    response.writeHead(200, { "Content-Type": contentType(url.split(".").at(-1)) });
    response.end(html);
  }).catch((error) => {
    console.log(error, url);
    response.writeHead(404);
    response.end();
  });

}).listen(8080);
