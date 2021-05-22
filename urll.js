const express=require ('express')
const app=express()
const checkUrl=function(req,res,next)
{
    console.warn("current route is",req.originalUrl)
    next();
}
app.use(checkUrl)
app.get('/home',function(req,res){
    res.send("WELCOME HOME")
})
app.get('/about',function(req,res){
    res.send("welcome to about us page")
})
app.get('/node',function(req,res){
    res.send("welcome to  my node js project")
})
app.listen(5000)