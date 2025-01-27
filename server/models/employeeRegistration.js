var mongoose = require('mongoose');

//Create teacehr Registration Schema using mongoose
var teacherRegisterSchema = mongoose.Schema({
    email: { type: String, unique: true },
    employeeName: { type: String,unique: false },
    fatherName: { type: String,unique: false },
    registrationDate: { type: String,unique: false },
    type: { type: String,unique: false },
    employeeType: { type: String,unique: false },
    employeeID: { type: String,unique: false },
    salary: { type: String,unique: false },
}, { collection: 'employee-register' });
var EmployeeRegister =module.exports= mongoose.model('EmployeeRegister', teacherRegisterSchema);