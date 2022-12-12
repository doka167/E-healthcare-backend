const { check } = require('express-validator');
module.exports.valdiatePostPatient = () => {
  const validationpatientinfo = [
    check('_id').notEmpty().withMessage('Patient ID cannot be empty.'),
    check('name').notEmpty().withMessage('Patient Name cannot be empty.'),
    check('registerDate').notEmpty().withMessage('Patient Register Date cannot be empty.'),
    check('perviousHosbitalization').notEmpty().withMessage('Pervious Hosbitalization cannot be empty.')
  ];
  return validationpatientinfo;
};