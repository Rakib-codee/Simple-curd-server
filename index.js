const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;


app.use(cors( ))
app.use(express.json());


app.get('/',(req, res)=>{
    res.send("Curd Server is Running")
})

app.listen(port,()=>{
    console.log(`Servre is running on the Port ${port}`)
})