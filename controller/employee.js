var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logUser'] != null) {
        var data = {
            username: req.cookies['logUser'],
        }
        res.render('employee', data);
    } else {
        res.redirect('/login');
    }
});

module.exports = router;

