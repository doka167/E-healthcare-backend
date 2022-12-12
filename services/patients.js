const { Error } = require('mongoose');
const PatientModel = require('../models/Patien');

module.exports.findAllPatients = async () => {
    try{
        const patient = await PatientModel.find();
        return patient;
    }catch(err){
        throw new Error('Could not retrieve Institute info');
    }
}


module.exports.addNewPatient = async (patientInfo) =>{
    try{
        const patient = new PatientModel ({
          _id : patientInfo._id,
          name: patientInfo.name,
          birthDate: patientInfo.birthDate,
          nationality: patientInfo.nationality ,
          address: patientInfo.address,
          phoneNumber: patientInfo.phoneNumber,
          registerDate: patientInfo.registerDate,
          perviousHosbitalization: patientInfo.perviousHosbitalization
        });
        const createPatient = await patient.save();
        return createPatient;
    }catch(err){
        throw new Error (err);
    }
};
module.exports.findPatientById = async (patientID) => {
  try {
    const patient = await PatientModel.findById(patientID);
    return patient;
  } catch (err) {
    throw new Error('Could not find patient.');
  }
};

module.exports.deletePatient = async (patientId) => {
    try {
      await PatientModel.deleteOne({ _id: patientId });
    } catch (err) {
      throw new Error('Could not remove Institute.');
    }
};

module.exports.updatePatient = async (patientInfo) => {

    try{
      const patient = new PatientModel ({
        _id : patientInfo._id,
        name: patientInfo.name,
        birthDate: patientInfo.birthDate,
        nationality: patientInfo.nationality ,
        address: patientInfo.address,
        phoneNumber: patientInfo.phoneNumber,
        registerDate: patientInfo.registerDate,
        perviousHosbitalization: patientInfo.perviousHosbitalization
      });
    let result = await PatientModel.updateMany(filter, update);
    return result;
  } catch (err) {
    throw new Error('Could not update Patient.');
  }
  }