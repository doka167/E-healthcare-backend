const {schema, model, Schema} = require ('mongoose');

const PatientSchema = new Schema({
    _id:{
        type:"Number",
        required:true
    },
    name:{
        type: "String",
        required: true
    },
    birthDate:{
        type: "String",
        required: true
    },
    nationality:{
        type: "String",
        required: true
    },
    address:{
        type: "String",
        required: true
    },
    phoneNumber:{
        type:"String",
        required:true
    },
    registerDate:{
        type: "String",
        required: true
    },
    perviousHosbitalization:{
        type: "Boolean",
        require: true
    },
});

const PatientModel = model ('patient' , PatientSchema);
module.exports = PatientModel ;