var express = require('express'),
    app = express(),
    path = require("path"),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen((process.env.PORT || 3000), function(err) {
    if (err) throw err;
    console.log('Listening on ' + (process.env.PORT || 3000) + '...');
});
