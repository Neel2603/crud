require('./modules/db')

const express = require('express')
const bodyparser = require('body-parser');
const path = require('path')
const exphbs = require('express-handlebars')
var app = express();
const employeecontroller = require('./controllers/employeeControl')
app.use(bodyparser.urlencoded({
    extended : true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname,'/views/'))
app.engine('hbs' , exphbs({extname : 'hbs' , defaultLayout : 'mainlayout', layoutDir : __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs')
app.listen(5000, ()=> {
    console.log('express started on 3000')
});

app.use('/employee' , employeecontroller );