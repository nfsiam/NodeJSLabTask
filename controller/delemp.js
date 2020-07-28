var express = require('express');
var router = express.Router();


router.get('/:id', (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        var id = req.params.id;
        var data = {
            username: req.cookies['logAdmin'],
            EmpName: "demo name " + id,
        }
        res.render('delemp', data);
    } else {
        res.redirect('/login');
    }
});

module.exports = router;

