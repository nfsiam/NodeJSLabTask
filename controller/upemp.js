var express = require('express');
var router = express.Router();


router.get('/:id', (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        var id = req.params.id;
        var data = {
            username: req.cookies['logAdmin'],
            EmpName: "demo name " + id,
            EmpPhone: "demo phone " + id,
            EmpAddress: "demo address " + id,
            EmpGender: "male",
            EmpDesignation: "salesman"
        }
        res.render('upemp', data);
    } else {
        res.redirect('/login');
    }
});



module.exports = router;

