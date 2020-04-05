const http = require('http');
//import https from 'https';
const express = require('express');

//Initiate our app
const app = express();

//Configure our app
app.use(express.static(__dirname + '/public'));

const HTTPPORT = process.env.HTTPAPIPORT || 5000;
//const HTTPSPORT = process.env.HTTPSAPIPORT || 5001;

const httpServer = http.createServer(app);
//const httpsServer = https.createServer(options, app);

httpServer.listen(HTTPPORT);
//httpsServer.listen(HTTPSPORT);
