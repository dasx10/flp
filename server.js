import http    from "http";
import fs      from "fs";
import memoize from "./Decorators/memoize/index.js";
import match   from "./Logic/match/index.js";

(() => {
  var file = memoize((url) => fs.promises.readFile(url, "utf-8"));
  var contentType = match({
    "css"  : "text/css",
    "html" : "text/html",
    "js"   : "application/javascript",
    "json" : "application/json",
  });

  http.createServer((request, response) => {
    var url = (request.url === "/") ? "./index.html" : "." + request.url;
    file(url).then((value) => {
      response.writeHead(200, { "Content-Type": contentType(url.split(".").at(-1)) });
      response.end(value);
    }).catch((error) => {
      response.writeHead(404);
      response.end();
    });
  }).listen(8080);
})();
