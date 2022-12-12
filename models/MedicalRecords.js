const {schema, model, Schema} = require ('mongoose');

const MHistorytSchema = new Schema({
    patientID:{
        type: 'String',
        required: true
    },
    doctorID:{
        type: 'String',
        required: true
    },
    patientName:{
        type:"String",
        required: true
    },
    stateDate:{
        type: 'String',
        required: true
    },
    Condition:{
        type: 'String',
        required: true
    },
    symptoms:{
        type: 'String',
        required: true
    },
    phoneNumber:{
        type:"Number",
        required:true
    },
    registerDate:{
        type: "String",
        required: true
    },
    suggestedTreatment:{
        type: "Boolean",
        require: true
    },
    doctorName:{
        type:"String",
        require: true
    },
    homeVisitsNum:{
        type: "Number",
        required: true
    }

});

const MHistoryModel = model ('MHistory' , MHistorytSchema);
module.exports = MHistoryModel ;