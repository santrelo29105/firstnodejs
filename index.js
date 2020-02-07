const express = require('express');
const app = express();

var fs = require('fs');

//setting
app.set('port',3000);
//app.set('views', path.join(__dirname,'views'));
//app.engine('html');
//app.set('view engine', 'ejs');

//middlewares


//routes
app.use(require('./src/routes/index.js'));




//static files


//listening the server
app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});
