const patientRecordsService = require('../services/medicalrecords');

module.exports.getPatientMedicalRecords = async (req, res) => {
  try {
    const patientRecords = await patientRecordsService.findAllPatientRecords();
    res.send({ patientMedicalRecord: patientRecords });
  } catch (err) {
    res.status(500);
    res.send({ error: err });
  }
};

module.exports.postPatientMedicalRecord = async (req, res) => {
  const patientRecordInfo = {
    _id: req.body._id,
    doctorId: req.body.doctorId,
    patientId: req.body.patientId,
    symptoms: req.body.symptoms
  };
  try {
    const createPatientRecord = await patientRecordsService.addNewPatientRecord(patientRecordInfo);
    return res.status(200).send({
      msg: 'Patient Record added successfully',
      patientMedicalRecordID: createPatientRecord._id
    });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
};


module.exports.deletePatientMedicalRecord = async (req, res) => {
  const patientMedicalRecordID = req.params.patientMedicalRecordID;
  try {
    await patientRecordsService.deletePatientRecord(patientMedicalRecordID);
    return res.send({
      msg: 'patient medical record deleted successfully.'
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
};


module.exports.getPatientMedicalRecord = async (req, res) => {
  const patientMedicalRecordID = req.params.patientMedicalRecordID;
  try {
    const patientMedicalRecord = await patientRecordsService.findPatientRecordById(patientMedicalRecordID);
    if (!patientMedicalRecord) {
      return res.status(404).send({
        error: 'patient medical record not found.'
      });
    }
    return res.send({
      patientMedicalRecord: patientMedicalRecord
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
};

module.exports.updatePatientMedicalRecord = async (req, res) => {
  const patientMedicalRecordID = req.params.patientMedicalRecordID;
  const symptoms = req.body.symptoms;
  try {
    let result = await patientRecordsService.updatePatientRecord(patientMedicalRecordID, symptoms);
    return res.send({
      msg: 'patient medical record updated successfully.'
    });
  } catch (err) {
    return res.status(500).send({
      error: err.message
    });
  }
}
