const {Router} = require('express');

const instituteValidator = require('../validator/Institutes');
const instituteController = require('../controllers/institutes');
const instituteRouter = Router();

instituteRouter.get('/',instituteController.getInstitutes);
instituteRouter.post(
    '/', 
    instituteValidator.valdiatePostinstitute(),
    instituteController.postInstitute);
instituteRouter.delete('/:InstitutetID', instituteController.deleteInstitute);
instituteRouter.get('/:InstitutetID', instituteController.getInstitute);
instituteRouter.put('/:InstitutetID', instituteController.updateInstitute);
instituteRouter.get('/:InstitutetID', instituteController.Generateinstitute);

module.exports = instituteRouter;
