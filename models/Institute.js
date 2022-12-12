const {schema, model, Schema} = require ('mongoose');

const InstituteSchema = new Schema({
    _id:{
        type:"Number",
        required:true
    },
    name:{
        type: "String",
        required: true
    },
    locationAdress:{
        type: "String",
        required: true
    },
    avaliableSpecializations:{
        type: "String",
        required: true
    },
    phoneNumber:{
        type: "String",
        required: true
    },

});


const InstitutetModel = model ('institute' , InstituteSchema);
module.exports = InstitutetModel ;