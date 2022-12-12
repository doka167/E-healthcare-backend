const { Error } = require('mongoose');
const DoctorModel = require('../models/Doctor');

module.exports.findAllDoctors = async () => {
    try{
        const doctor = await DoctorModel.find();
        return doctor;
    }catch(err){
        throw new Error('Could not retrieve Doctor info');
    }
}


module.exports.addNewDoctor = async (DoctorInfo) =>{
    try{
        const doctor = new DoctorModel ({
            _id:DoctorInfo._id,
            name: DoctorInfo.name,
            birthDate: DoctorInfo.birthDate,
            nationality:DoctorInfo.nationality,
            address:DoctorInfo.address,
            phoneNumber:DoctorInfo.phoneNumber,
            degree:DoctorInfo.degree,
            specialization:DoctorInfo.specialization,
            date:DoctorInfo.date,
            time:DoctorInfo.time
        });
        const createDoctor = await doctor.save();
        return createDoctor;
    }catch(err){
        throw new Error (err);
    }
}

module.exports.finddoctorById = async (doctorID) => {
    try {
      const doctor = await DoctorModel.findById(doctorID);
      return doctor;
    } catch (err) {
      throw new Error('Could not find Doctor.');
    }
  };
  
  module.exports.deleteDoctor = async (doctorID) => {
      try {
        await DoctorModel.deleteOne({ _id: doctorID });
      } catch (err) {
        throw new Error('Could not remove Doctor.');
      }
  };

  module.exports.updateDoctor = async (DoctorInfo) => {
    try {
  
        const doctor = new DoctorModel ({
            _id:DoctorInfo._id,
            name: DoctorInfo.name,
            birthDate: DoctorInfo.birthDate,
            nationality:DoctorInfo.nationality,
            address:DoctorInfo.address,
            phoneNumber:DoctorInfo.phoneNumber,
            degree:DoctorInfo.degree,
            specialization:DoctorInfo.specialization,
            date:DoctorInfo.date,
            time:DoctorInfo.time
        });
      let result = await DoctorModel.updateMany(filter, update);
      return result;
    } catch (err) {
      throw new Error('Could not update doctor.');
    }
  }