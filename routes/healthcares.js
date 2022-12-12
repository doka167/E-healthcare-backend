const {Router} = require('express');

const HealthcareController = require('../controllers/healthcares');
const HealthcareRouter = Router();

HealthcareRouter.get('/',HealthcareController.getHCRecords);
HealthcareRouter.post('/', HealthcareController.postHCRecord);
HealthcareRouter.delete('/:HealthCareID/:reservationServiceCode', HealthcareController.deleteHCRecord);
HealthcareRouter.get('/:HealthCarePatientID', HealthcareController.getHCRecord);

module.exports = HealthcareRouter;