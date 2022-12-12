const {Router} = require('express');

const patientMedicalRecordController = require('../controllers/medicalrecords');
const patientMedicalRecordsRouter = Router();

patientMedicalRecordsRouter.get('/',patientMedicalRecordController.getPatientMedicalRecords);
patientMedicalRecordsRouter.post('/', patientMedicalRecordController.postPatientMedicalRecord);
patientMedicalRecordsRouter.delete('/:patientMedicalRecordID', patientMedicalRecordController.deletePatientMedicalRecord);
patientMedicalRecordsRouter.put('/:patientMedicalRecordID', patientMedicalRecordController.updatePatientMedicalRecord);
patientMedicalRecordsRouter.get('/:patientMedicalRecordID', patientMedicalRecordController.getPatientMedicalRecord);

module.exports = patientMedicalRecordsRouter;