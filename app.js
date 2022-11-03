const express = require('express');
const { read } = require('fs');
const app = express();

const path = require ('path');

//Llamando a puerto 
let PORT = process.env.PORT  || 4040
app.listen(PORT, console.log('Listen on port ' + PORT));

//Llamado a public
app.use(express.static('public'));


//Llamado a home
app.get('/', (req, res) => {
    console.log ('Entre a la home');
    res.sendFile(path.resolve('./views/home.html'));
})