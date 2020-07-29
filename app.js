//DECELARATION
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var login = require('./controller/login');
var logout = require('./controller/logout');

var admin = require('./controller/admin/admin');
var employee = require('./controller/employee/employee');


var app = express();

//Configuration
app.set('view engine', 'ejs');

//Middleware
app.use(bodyParser());
app.use(cookieParser());

app.use('/Login', login);
app.use('/Logout', logout);

app.use('/Admin', admin);
app.use('/Admin/AddEmployee', admin);
app.use('/Admin/AllEmployeeList', admin);
app.use('/Admin/Update', admin);
app.use('/Admin/Delete', admin);

app.use('/Employee', employee);
app.use('/Employee/MyProfile', employee);
app.use('/Employee/UpdateProfile', employee);


//SERVER STARTUP
app.listen(3000, () => {
    console.log('express server started at 3000');
});