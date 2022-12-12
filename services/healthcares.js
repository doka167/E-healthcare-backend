const { Error } = require('mongoose');
const HealthcareModel = require('../models/HealthCare');

module.exports.findAllHCRecords = async () => {
    try{
        const HealthCare = await HealthcareModel.find();
        return HealthCare;
    }catch(err){
        throw new Error('Could not retrieve institute info');
    }
};


module.exports.addNewHCRecord = async (HealthCareInfo) =>{
    try{
        const HealthCare = new HealthcareModel ({
            patientID: HealthCareInfo.patientID,
            patientName: HealthCareInfo.patientName,
            reservationDate: HealthCareInfo.reservationDate,
            reservationScheduledTime:HealthCareInfo.reservationScheduledTime,
            reservationServiceCode:HealthCareInfo.reservationServiceCode,
            reservationServiceName: HealthCareInfo.reservationServiceName,
            serviceProviderInstituteId: HealthCareInfo.serviceProviderInstituteId,
            serviceProviderInstituteName: HealthCareInfo.serviceProviderInstituteName,
            doctorToServeId: HealthCareInfo.doctorToServeId,
            doctorToServe: HealthCareInfo.doctorToServe,
            serviceCost: HealthCareInfo.serviceCost,
            costPaid: HealthCareInfo.costPaid,
        });
        const createHCrecord = await HealthCare.save();
        return createHCrecord;
    }catch(err){
        throw new Error (err);
    }
};

module.exports.findHCRecordByPatient = async (HealthCarePatientID) => {
    try {
      const HealthCare = await HealthcareModel.find({patientID: HealthCarePatientID});
      return HealthCare;
    } catch (err) {
      throw new Error('Could not find Service.');
    }
  };
  
  module.exports.deleteHCRecordOfaPatient = async (HealthCareID, code) => {
      try {
        await HealthcareModel.deleteOne({ patientID: HealthCareID,  reservationServiceCode: code});
      } catch (err) {
        throw new Error('Could not remove Service.');
      }
  };
  