import express from "express"
const PORT = 3000;
const app = express()
app.use('/',(req,res,next) =>{
    console.log("app use 1. üzenet") 
    next()
}); 
app.use('/user',(req,res,next) =>{
    console.log("app use 2. üzenet") 
    res.send("<h2> User page </h2>")
    next()
}); 
app.use('/',(req,res,next) =>{
    console.log("app use 3. üzenet") 
    res.send("szia")
}); 

app.listen(PORT,() =>console.log(`fut a szerver a https://localhost:${PORT} porton`))