const {schema, model, Schema} = require ('mongoose');

const HealthCareSchema = new Schema({
    patientID:{
        type:"Number",
        required:true
    },
    patientName:{
        type: "String",
        required: true
    },
    reservationDate:{
        type: "String",
        required: true
    },
    reservationScheduledTime:{
        type: "String",
        required: true
    },
    reservationServiceCode:{
        type: "Number",
        required: true
    },
    reservationServiceName:{
        type:"String",
        required:true
    },
    serviceProviderInstituteId:{
        type:"String",
        required: true
    },
    serviceProviderInstituteName:{
        type:"String",
        required: true
    },
    doctorToServeId:{
        type:"Number",
        required:false
    },
    doctorToServe:{
        type:"String",
        required: false
    },
    serviceCost:{
        type:"Number",
        required:true
    },
    costPaid:{
        type:"Boolean",
        required:true
    }

});


const HealthcareModel = model ('HealthCare' , HealthCareSchema);
module.exports = HealthcareModel ;