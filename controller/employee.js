var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var id = req.params.id;
        var data = {
            username: req.cookies['logUser'],
            EmpName: "demo name " + id,
        }
        res.render('employee', data);
    } else {
        res.redirect('/login');
    }
});

module.exports = router;

