
const doctorsService = require('../services/doctors');

module.exports.getDoctors = async (req, res) => {
    try{
        const doctor = await doctorsService.findAllDoctors();
        res.send({doctor});
    }catch(err){
        res.status(500);
        res.send({error: err});
    }
};

module.exports.postDoctor = async (req,res) => {
    const doctorInfo = {
        _id: req.body._id,
        name: req.body.name,
        birthDate:req.body.birthDate,
        nationality: req.body.nationality,
        address:req.body.address,
        phoneNumber:req.body.phoneNumber,
        degree:req.body.degree,
        specialization:req.body.specialization,
        date:req.body.date,
        time:req.body.time
    };
    try{
        const createDoctor = await doctorsService.addNewDoctor(doctorInfo);
        return res.status(201).send({
            msg:'Doctor added successfully',
            doctortID : createDoctor._id
        });
    }catch(err){
        return res.status(500).send({error:err.message});
    }
};
module.exports.deleteDoctor = async (req, res) => {
    const DoctortId = req.params.DoctorID;
    try {
      await doctorsService.deleteDoctor(DoctortId);
      return res.send({
        msg: 'Doctor deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };


  module.exports.getDoctor = async (req, res) => {
    const DoctortId = req.params.DoctorID;
    try {
      const doctor = await doctorsService.finddoctorById(DoctortId);
      if (!doctor) {
        return res.status(404).send({
          error: 'Doctor not found.'
        });
      }
      return res.send({
        doctor: doctor
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };
  module.exports.updateDoctor = async (req, res) => {
    const doctorInfo = {
      _id: req.body._id,
      name: req.body.name,
      birthDate:req.body.birthDate,
      nationality: req.body.nationality,
      address:req.body.address,
      phoneNumber:req.body.phoneNumber,
      degree:req.body.degree,
      specialization:req.body.specialization,
      date:req.body.date,
      time:req.body.time
  };
    try {
      let result = await doctorsService.updateDoctor(doctorInfo,);
      return res.send({
        msg: 'Doctor updated successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  }