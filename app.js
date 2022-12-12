const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const initiateDBConnection = require('./config/db');
const patientRouter = require('./routes/patients');
const instituteRouter = require('./routes/institutes');
const doctorRouter = require('./routes/doctors');
const HealthcareRouter = require('./routes/healthcares');
const patientMedicalRecordsRouter = require('./routes/medicalrecords');
const authRouter = require('./routes/auth')
dotenv.config({
    path: './config/.env'
});
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());
app.use('/doctors', doctorRouter);
app.use('/institutes', instituteRouter);
app.use('/patients', patientRouter);
app.use('/HC', HealthcareRouter);
app.use('/medicalRecords', patientMedicalRecordsRouter);
app.use('/auth', authRouter);
app.listen (PORT, async()=> {
    console.log(`Server has been started as is listening to port ${PORT}`);
    await initiateDBConnection();
});
