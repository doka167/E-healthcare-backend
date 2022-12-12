
const HealthCareService = require('../services/healthcares');

module.exports.getHCRecords = async (req, res) => {
    try{
        const HealthCare = await HealthCareService.findAllHCRecords();
        res.send({HealthCare});
    }catch(err){
        res.status(500);
        res.send({error: err});
    }
};

module.exports.postHCRecord = async (req,res) => {
    const HealthCareInfo = {  
        patientID: req.body.patientID,
        patientName: req.body.patientName,
        reservationDate: req.body.reservationDate,
        reservationScheduledTime:req.body.reservationScheduledTime,
        reservationServiceCode:req.body.reservationServiceCode,
        reservationServiceName: req.body.reservationServiceName,
        serviceProviderInstituteId: req.body.serviceProviderInstituteId,
        serviceProviderInstituteName: req.body.serviceProviderInstituteName,
        doctorToServeId: req.body.doctorToServeId,
        doctorToServe: req.body.doctorToServe,
        serviceCost: req.body.serviceCost,
        costPaid: req.body.costPaid,
    };
    try{
        const createHCrecord = await HealthCareService.addNewHCRecord(HealthCareInfo);
        return res.status(201).send({
            msg:'HC added successfully',
            HealthCareID : createHCrecord._id
        });
    }catch(err){
        return res.status(500).send({error:err.message});
    }
};

module.exports.deleteHCRecord = async (req, res) => {
    const HealthCareID = req.params.HealthCareID;
    const  reservationServiceCode = req.params.reservationServiceCode
    try {
      await HealthCareService.deleteHCRecordOfaPatient(HealthCareID,reservationServiceCode);
      return res.send({
        msg: 'HC deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };


  module.exports.getHCRecord = async (req, res) => {
    const HealthCarePatientID = req.params.HealthCarePatientID;
    try {
      const HealthCare = await HealthCareService.findHCRecordByPatient(HealthCarePatientID);
      if (!HealthCare) {
        return res.status(404).send({
          error: 'HC not found.'
        });
      }
      return res.send({
        HealthCare: HealthCare
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }
  };