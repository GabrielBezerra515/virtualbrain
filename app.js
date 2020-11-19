const express = require('express');
const app = express();

const cors = require("cors");
const msg = "Running"

const path = require('path');
const bodyParse = require('body-parser');

// configurando o body Parser
// ---------------------------------------------------------------------------------------------
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json())
// ---------------------------------------------------------------------------------------------

app.use(express.static('public'));
app.use(cors());

app.get("/api", (_, res) => 
    res.json({
        data:msg,
    })
);

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/login', function(req,res){
    res.sendFile(path.join(__dirname, './public', 'Login.html'));
});

app.get('/dashboard', function(req,res){
    res.sendFile(path.join(__dirname, './public', 'index-dashboard.html'));
});

app.get('/maquinas', function(req,res){
    res.sendFile(path.join(__dirname, './public', 'maquinas-dashboard.html'));
});

app.listen(process.env.PORT || 3333, () => console.log(msg));