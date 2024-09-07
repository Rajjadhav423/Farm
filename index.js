const express=require('express')
const app=express()



app.get('/',(req,res)=>{
    res.send("pankaj")
})

app.listen(3000,()=>{
    console.log('server listening at 3000');
    
})