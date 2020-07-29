var express = require('express');
var router = express.Router();

let data = {
    username: '',
    empObj: {
        EmpName: '',
        EmpPhone: '',
        EmpAddress: '',
        EmpGender: '',
        EmpDesignation: ''
    },
}

const logValid = (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        return true;
    } else {
        res.redirect('/Login');
    }
};

const viewLoader = (req, res, path) => {
    data.username = req.cookies['logAdmin'];
    res.render(path, data);
};


//dashboard
router.get('/', (req, res) => {
    if (logValid(req, res)) {
        viewLoader(req, res, 'admin/admin')
    }
});

//all employee info
router.get('/AllEmployeeList', (req, res) => {
    if (logValid(req, res)) {
        viewLoader(req, res, 'admin/allemp')
    }
});

//add employee
router.get('/AddEmployee', (req, res) => {
    if (logValid(req, res)) {
        viewLoader(req, res, 'admin/addemp')
    }
});

//update employee
router.get('/Update/:id', (req, res) => {

    if (logValid(req, res)) {
        const id = req.params.id;
        data.empObj.EmpName = `demo name ${id}`;
        data.empObj.EmpPhone = `demo phone ${id}`;
        data.empObj.EmpAddress = `demo address ${id}`;
        data.empObj.EmpGender = 'male';
        data.empObj.EmpDesignation = 'salesman';

        viewLoader(req, res, 'admin/upemp')
    }

});

//delete employee
router.get('/Delete/:id', (req, res) => {
    if (req.cookies['logAdmin'] != null) {
        const id = req.params.id;
        data.EmpName = `demo name ${id}`;
        res.render('admin/delemp', data);
    } else {
        res.redirect('/Login');
    }
});


router.post('/', (req, res) => {
    res.render('posted');
});


module.exports = router;
