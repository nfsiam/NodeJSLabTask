var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var data = {
            username: req.cookies['logUser'],
            EmpName: "demo name " + req.cookies['logUser'],
            EmpPhone: "demo phone ",
            EmpAddress: "demo address ",
            EmpGender: "male",
            EmpDesignation: "salesman"
        }
        res.render('myprofile', data);
    } else {
        res.redirect('/login');
    }
});



module.exports = router;

