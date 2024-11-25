const fs = require("fs");
const http = require("http");
const url = require("url");

//////////////////////////////////////////////////////
//// FILES
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//             console.log(data3);
//             fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", err => {
//                 console.log("Your file has been written")
//             })
//         })
//     })
// })
// console.log("Will read file!")
// function (err, data1) {
// }
//////////////////////////////////////////////////////
//// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);
const server = http.createServer((req, res) => {
    console.log(req.url);
    const pathName = req.url
    if (pathName === "/overview" || pathName === "/") {
        res.end("This is the OVERVIEW");
    }else if(pathName === "/product"){
        res.end("This is the Product");
    }else if(pathName === "/api"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(data);
    } else {
        res.writeHead(404);
        res.end("Page not found!");
    }
})

server.listen(8000, "127.0.0.1", () =>{
    console.log("Listening to requests on port 8000")
})