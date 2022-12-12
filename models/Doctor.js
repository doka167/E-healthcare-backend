const {schema, model, Schema} = require ('mongoose');

const DoctorSchema = new Schema({
    _id:{
        type:"Number",
        required:true
    },
    name:{
        type: 'String',
        required: true
    },
    birthDate:{
        type: 'String',
        required: true
    },
    nationality:{
        type: 'String',
        required: true
    },
    address:{
        type: 'String',
        required: true
    },
    phoneNumber:{
        type:"String",
        required:true
    },
    degree:{
        type:"String",
        required: true
    },
    specialization:{
        type:"String",
        required: true
    },
    date : {
        type : "String",
        required: true
    },
    time : {
        type : "String",
        required: true
    }

});


const DoctorModel = model ('doctor' , DoctorSchema);
module.exports = DoctorModel ;