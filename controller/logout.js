var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.clearCookie('logAdmin');
    res.clearCookie('logUser');
    res.redirect('/Login');
});

router.post('/', (req, res) => {

});

module.exports = router;