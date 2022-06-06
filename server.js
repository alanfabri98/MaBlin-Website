/*const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/MaBlinWebsite'));
app.get('/*', (req,res) => {
    res.sendFile(__dirname+'/dist/MaBlinWebsite/index.html');
});

app.listen(process.env.PORT || 8080);*/
const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/MablinWebsite'));
app.get('/*', function(req,res) {res.sendFile( path.join(__dirname + '/dist/MablinWebsite/index.html') );});
app.listen(process.env.PORT || 8080);