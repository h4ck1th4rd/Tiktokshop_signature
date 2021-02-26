var express = require('express');
var fs=require("fs");
var app = express();

//方法1：通过express.static访问静态文件，这里访问的是ajax.html
// app.use(express.static("./"));

//方法2：使用fs.readFile打开html文件
// app.get("/demo.html", function(request, response) {
//    fs.readFile("./"+request.path.substr(1),function(err,data){
//         // body
//         if(err){
//             console.log(err);
//             //404：NOT FOUND
//             response.writeHead(404,{"Content-Type":"text/html"});
//         }
//         else{
//             //200：OK
//             response.writeHead(200);
//             response.write(data.toString());
//         }
//
//        response.end();
//     });
// });
//
// app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
//     console.log("server start");
// });
   // let signature = data;
   //          console.log(
   //              "获得signature值为:%s",signature
   //          );
   //          response.json({
   //              result:signature
   //          })
app.get("/test.html", function(request, response) {
   fs.readFile("./"+request.path.substr(1),function(err,data){
        // body
            //200：OK
       response.writeHead(200);
       response.write(data.toString());
       response.end();
    });
});


app.listen(3000, function() {   //监听http://127.0.0.1:3000端口
    console.log("server start");
});