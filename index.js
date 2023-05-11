const http = require("http");
const url = require('url');

const calc = require("./calc");
const { write } = require("fs");

// import { sum } from './sum';

http.createServer((req,res) => {
    console.log("Hello")
    
    // res.writeHead(200, {"Content-type": "text/plain"});
    res.writeHead(200, {"Content-type": "text/html"});


    let urlPath = url.parse(req.url).path;
    console.log("urlPath: ", urlPath)

    if (urlPath !== "/favicon.ico") {
        let numArray = urlPath.substring(1).split("/")
        let action = numArray[0]
        let num1 = parseInt(numArray[1])
        let num2 = parseInt(numArray[2])

        console.log("action: ", action)
        console.log("num1: ", num1)
        console.log("num2: ", num2)

        // console.log(calc.sum(num1, num2))
        // console.log(calc.sub(num1, num2))
        // console.log(calc.mult(...[num1, num2]))
        // console.log(calc.div(...[num1, num2]))

        let result;
        
        switch (action) {
            case "sum":
                result = calc.sum(num1, num2)
                break;
            case "sub":
                result = calc.sub(num1, num2)
                break;
            case "mult":
                result = calc.mult(num1, num2)
                break;
            case "div":
                result = calc.div(num1, num2)
                break;
        }
        
        console.log("result: ", result)

        res.write(String(result))

        // res.end("\nHello! Server is currently running at `localhost:8090`")
        res.end("")
    }

}).listen(8090);

console.log("Server running at https://localhost:8090")