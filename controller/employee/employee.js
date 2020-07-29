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
    if (req.cookies['logUser'] != null) {
        return true;
    } else {
        res.redirect('/Login');
    }
};

const viewLoader = (req, res, path) => {
    data.username = req.cookies['logUser'];
    res.render(path, data);
};


router.get('/', (req, res) => {

    if (logValid(req, res)) {
        viewLoader(req, res, 'employee/employee');
    }
});

//my profile
router.get('/MyProfile', (req, res) => {

    if (logValid(req, res)) {
        const id = req.cookies['logUser'];
        data.empObj.EmpName = `demo name ${id}`;
        data.empObj.EmpPhone = `demo phone ${id}`;
        data.empObj.EmpAddress = `demo address ${id}`;
        data.empObj.EmpGender = 'male';
        data.empObj.EmpDesignation = 'salesman';

        viewLoader(req, res, 'employee/myprofile');
    }
});

//update profile
router.get('/UpdateProfile', (req, res) => {

    if (logValid(req, res)) {
        const id = req.cookies['logUser'];
        data.empObj.EmpName = `demo name ${id}`;
        data.empObj.EmpPhone = `demo phone ${id}`;
        data.empObj.EmpAddress = `demo address ${id}`;
        data.empObj.EmpGender = 'male';
        data.empObj.EmpDesignation = 'salesman';

        viewLoader(req, res, 'employee/upprofile');
    }
});

module.exports = router;

