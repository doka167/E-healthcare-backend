const {check} =require('express-validator')
module.exports.valdiatePostinstitute = () => {
    const validationinstituteinfo = [
      check('_id').notEmpty().withMessage('Institute ID cannot be empty.'),
      check('name').notEmpty().withMessage('Institute Name cannot be empty.'),
      check('locationAdress').notEmpty().withMessage('Location cannot be empty.'),
      check('avaliableSpecializations').notEmpty().withMessage('Avaliable Specializations cannot be empty.')
    ];
    return validationinstituteinfo;
  };