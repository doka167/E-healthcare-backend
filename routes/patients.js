const {Router} = require('express');

const patientValidator = require('../validator/Patients');
const patientController = require('../controllers/patients');
const patientRouter = Router();


patientRouter.get('/',patientController.getPatients);
patientRouter.post(
    '/',
    patientValidator.valdiatePostPatient(), 
    patientController.postPatient);
patientRouter.delete('/:patientID', patientController.deletePatient);
patientRouter.get('/:patientID', patientController.getPatient);
patientRouter.put('/:patientID', patientController.updatePatient);

module.exports = patientRouter;
