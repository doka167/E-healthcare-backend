const {Router} = require('express');

const doctortValidator = require('../validator/Doctors');
const doctorController = require('../controllers/doctors');
const doctorRouter = Router();

doctorRouter.get('/',doctorController.getDoctors);
doctorRouter.post(
    '/', 
    doctortValidator.valdiatePostDoctor(),
    doctorController.postDoctor);
doctorRouter.delete('/:DoctorID', doctorController.deleteDoctor);
doctorRouter.get('/:DoctorID', doctorController.getDoctor);
doctorRouter.put('/:DoctorID', doctorController.updateDoctor);

module.exports = doctorRouter;
