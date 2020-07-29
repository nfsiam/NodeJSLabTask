var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var data = {
            username: req.cookies['logUser'],
        }
        res.render('employee/employee', data);
    } else {
        res.redirect('/Login');
    }
});

//my profile
router.get('/MyProfile', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var data = {
            username: req.cookies['logUser'],
            EmpName: "demo name " + req.cookies['logUser'],
            EmpPhone: "demo phone ",
            EmpAddress: "demo address ",
            EmpGender: "male",
            EmpDesignation: "salesman"
        }
        res.render('employee/myprofile', data);
    } else {
        res.redirect('/Login');
    }
});

//update profile
router.get('/UpdateProfile', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var data = {
            username: req.cookies['logUser'],
            EmpName: "demo name " + req.cookies['logUser'],
            EmpPhone: "demo phone ",
            EmpAddress: "demo address ",
            EmpGender: "male",
            EmpDesignation: "salesman"
        }
        res.render('employee/upprofile', data);
    } else {
        res.redirect('/Login');
    }
});

module.exports = router;

