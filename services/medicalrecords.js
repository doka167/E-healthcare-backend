const { Error } = require('mongoose');
const MedicalRecordsModel = require('../models/MedicalRecords');
const SymptomsAPI = require('../services/symptoms');
module.exports.findAllPatientRecords = async () => {
  try {
    const patient_records = await MedicalRecordsModel.find();
    return patient_records;
  } catch (err) {
    throw new Error('Could not retrieve Institute info');
  }
}


module.exports.addNewPatientRecord = async (recordInfo) => {
  try {
    const patient_record = new MedicalRecordsModel({
      _id: recordInfo._id,
      doctorId: recordInfo.doctorId,
      patientId: recordInfo.patientId,
      symptoms: recordInfo.symptoms,
      patientName: recordInfo.patientName,
    stateDate: recordInfo.stateDate,
    Condition: recordInfo.Condition,
    phoneNumber: recordInfo.phoneNumber,
    registerDate: recordInfo.registerDate,
    suggestedTreatment: recordInfo.suggestedTreatment,
    doctorName: recordInfo.doctorName,
    homeVisitsNum: recordInfo.homeVisitsNum
    });
    const createPatientRecord = await patient_record.save();
    return createPatientRecord;
  } catch (err) {
    throw new Error(err);
  }
};
module.exports.findPatientRecordById = async (patientRecordID) => {
  try {
    const patient_record = await MedicalRecordsModel.findById(patientRecordID);
    return patient_record;
  } catch (err) {
    throw new Error('Could not find patient.');
  }
};

module.exports.deletePatientRecord = async (patientRecordId) => {
  try {
    await MedicalRecordsModel.deleteOne({ _id: patientRecordId });
  } catch (err) {
    throw new Error('Could not remove Institute.');
  }
};

module.exports.updatePatientRecord = async (patientRecordId, Condition) => {
  try {
    const filter = { _id: patientRecordId };
    const update = { Condition: Condition };
    let result = await MedicalRecordsModel.findOneAndUpdate(filter, update);
    return result;
  } catch (err) {
    throw new Error('Could not remove Institute.');
  }
}
module.exports.showSymptoms = async (req,res) => {
  try {
    const patientSymptoms = await SymptomsAPI.symptomsAddress(req.body.address);
    return res.status(422).send({
      error: 'Could not find symptoms'
    });
  } catch (err) {
    throw new Error('Could not find Symptoms.');
  }
};

