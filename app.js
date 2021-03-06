//DECELARATION
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var login = require('./controller/login');
var admin = require('./controller/admin');
var logout = require('./controller/logout');
var addemp = require('./controller/addemp');
var allemp = require('./controller/allemp');
var upemp = require('./controller/upemp');
var delemp = require('./controller/delemp');
var employee = require('./controller/employee');
var myprofile = require('./controller/myprofile');
var upprofile = require('./controller/upprofile');

var app = express();

//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use(cookieParser());

app.use('/Login', login);
app.use('/Admin', admin);
app.use('/Logout', logout);
app.use('/Admin/AddEmployee', addemp);
app.use('/Admin/AllEmployeeList', allemp);
app.use('/Admin/Update', upemp);
app.use('/Admin/Delete', delemp);
app.use('/Employee', employee);
app.use('/Employee/MyProfile', myprofile);
app.use('/Employee/UpdateProfile', upprofile);


//SERVER STARTUP
app.listen(3000, () => {
    console.log('express server started at 3000');
});