
var http=require('http')
http.createServer(function(req,res){
    res.write('/about',"wo my node js project");
    res.end();

}).listen(9000)