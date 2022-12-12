const {check} =require('express-validator')
module.exports.valdiatePostDoctor = () => {
    const validationdoctorinfo = [
      check('_id').notEmpty().withMessage('Doctor ID cannot be empty.'),
      check('name').notEmpty().withMessage('Doctor Name cannot be empty.'),
      check('degree').notEmpty().withMessage('Doctor Degree cannot be empty.'),
      check('specialization').notEmpty().withMessage('Doctor Specialization cannot be empty.'),
      check('time').notEmpty().withMessage('Doctor Time Slot cannot be empty.')
    ];
    return validationdoctorinfo;
  };