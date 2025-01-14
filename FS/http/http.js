//import http module
const http = require('http');

//status codes write all the status codes
// 200 - OK
// 404 - Not Found
// 500 - Internal Server Error
// 301 - Moved Permanently
// 302 - Found
// 303 - See Other
// 304 - Not Modified
// 307 - Temporary Redirect
// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden
// 405 - Method Not Allowed
// 410 - Gone

//create server
let server = http.createServer((req, res) => {
    res.end('<h1>Hello nodejs</h1>');
})

server.listen(5000, () => {
   console.log(`server is running in port https://localhost:5000`);
})






