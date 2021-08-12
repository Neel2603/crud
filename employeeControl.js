const express= require('express')
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee')
var router = express.Router()

router.get ('/', (req,res) => {
    res.render("employee/addOrEdit", {
        viewTitle : "insert Employee"
    })
})
router.post('/',(req,res) => {
    insertRecord(req,res);
})

function insertRecord (req,res) {
    var employee = new Employee();
    employee.fullName = req.body.fullName;
    employee.email = req.body.email;
    employee.mobile = req.body.mobile;
    employee.city = req.body.city;
    employee.save((err,doc) => {
            if(!err){
                res.redirect('employee/list')
            }
            else {
                console.log('error during insertion' + err)
            }
    })

}
  


module.exports = router;
