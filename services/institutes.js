const { Error } = require('mongoose');
const InstitutetModel = require('../models/Institute');

module.exports.findAllInstitutes = async () => {
    try{
        const Institute = await InstitutetModel.find();
        return Institute;
    }catch(err){
        throw new Error('Could not retrieve institute info');
    }
};


module.exports.addNewInstitute = async (InstituteInfo) =>{
    try{
        const institute = new InstitutetModel ({
            _id: InstituteInfo._id,
            name: InstituteInfo.name,
            locationAdress: InstituteInfo.locationAdress,
            avaliableSpecializations:InstituteInfo.avaliableSpecializations,
            phoneNumber:InstituteInfo.phoneNumber
        });
        const createInstitute = await institute.save();
        return createInstitute;
    }catch(err){
        throw new Error (err);
    }
};

module.exports.findInstituteById = async (instituteID) => {
    try {
      const institute = await InstitutetModel.findById(instituteID);
      return institute;
    } catch (err) {
      throw new Error('Could not find Institute.');
    }
  };
  
  module.exports.deleteInstitute = async (instituteID) => {
      try {
        await InstitutetModel.deleteOne({ _id: instituteID });
      } catch (err) {
        throw new Error('Could not remove Institute.');
      }
  };
  
  module.exports.updateInstitute = async (patientRecordId, symptoms) => {
    try {
      const institutetInfo = new InstitutetModel ({
        _id: institutetInfo._id,
        name: institutetInfo.name,
        locationAdress: institutetInfo.locationAdress,
        avaliableSpecializations:institutetInfo.avaliableSpecializations,
        phoneNumber:institutetInfo.phoneNumber
    });
      let result = await InstitutetModel.updateMany ();
      return result;
    } catch (err) {
      throw new Error('Could not update Institute.');
    }
  };
  module.exports.GenerateinstituteReport = async () => {
    try{
      const institute = await InstitutetModel.find().populate(); 
    }
      catch (err) {
        throw new Error('Could not Generate Institute Report.');
    }
  }