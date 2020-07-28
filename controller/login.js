var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/', (req, res) => {
    if (req.body.username == 'siam' && req.body.password == '1234') {
        res.cookie('logAdmin', req.body.username);
        res.redirect('/Admin');
    } else if (req.body.username == 'nafiz' && req.body.password == '1234') {
        res.cookie('logUser', req.body.username);
        res.redirect('/Employee');
    } else {
        res.send('invalid username/password');
    }
});

module.exports = router;