const express = require('express');
const app = express();
app.use(express.static(__dirname+"/static"))
app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
})
app.listen(3001, () =>{
    console.log("server started listening at"+3001);
})
