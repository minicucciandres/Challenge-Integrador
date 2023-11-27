const express = require("express");
const app = express();

app.use(express.static('public'));


app.get('/home', (req,res)=> res.sendfile(__dirname + '/public/index.html'));
app.get('/ping', (req,res)=> res.send('pong'));

const PORT = 4000;

app.listen(PORT,() => console.log(`servidor corriendo en http://localhost:${PORT}`));
