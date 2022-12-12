
const patientsService = require('../services/patients');

module.exports.getPatients = async (req, res) => {
    try{
        const patient = await patientsService.findAllPatients();
        res.send({patient});
    }catch(err){
        res.status(500);
        res.send({error: err});
    }
};

module.exports.postPatient = async (req,res) => {
    const patientInfo = {
        _id : req.body._id,
        name: req.body.name,
        birthDate: req.body.birthDate,
        nationality: req.body.nationality ,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        registerDate: req.body.registerDate,
        perviousHosbitalization: req.body.perviousHosbitalization
    };
    try{
        const createPatient = await patientsService.addNewPatient(patientInfo);
        return res.status(201).send({
            msg:'Patient added successfully',
            patientID : createPatient._id
        });
    }catch(err){
        return res.status(500).send({error:err.message});
    }
};

module.exports.deletePatient = async (req, res) => {
    const patientId = req.params.patientID;
    try {
      await patientsService.deletePatient(patientId);
      return res.send({
        msg: 'patient deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };


  module.exports.getPatient = async (req, res) => {
    const patientID = req.params.patientID;
    try {
      const patient = await patientsService.findPatientById(patientID);
      if (!patient) {
        return res.status(404).send({
          error: 'patient not found.'
        });
      }
      return res.send({
        patient: patient
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };
  module.exports.updatePatient = async (req, res) => {
    const patientInfo = {
      _id : req.body._id,
      name: req.body.name,
      birthDate: req.body.birthDate,
      nationality: req.body.nationality ,
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      registerDate: req.body.registerDate,
      perviousHosbitalization: req.body.perviousHosbitalization
  };
    try {
      const result = await patientsService.updatePatient(patientInfo,);
      return res.send({
        msg: 'Patient updated successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  }


 