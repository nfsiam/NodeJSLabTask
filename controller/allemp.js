var express = require('express');
var router = express.Router();


router.get('/', (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        var data = {
            username: req.cookies['logAdmin']
        }
        res.render('allemp', data);
    } else {
        res.redirect('/login');
    }
});



module.exports = router;

