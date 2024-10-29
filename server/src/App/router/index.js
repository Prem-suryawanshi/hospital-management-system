import express from 'express';
import AuthRoutes from '../routes/auth.routes.js';  // Add .js extension for local file import
import { healthCheck } from '../utils/healthCheck/health.controller.js';
import  settingRoute  from '../routes/routes.setting.js'
import { getSetting } from '../controller/setting/index.js';
import staffRoutes from '../routes/routes.staff.js';
import { getAllStaff } from '../controller/staff/index.js';

import TestRoutes from '../routes/test.routes.js';

import medicationRouter from  '../routes/routes.patientMedication.js'
import PatientRoute from '../routes/patient.route.js';

import { getPatientMedication } from '../controller/patientMedication/index.js';


const AllRoutes = express();

// Define the route
AllRoutes.use('/auth', AuthRoutes);
AllRoutes.route('/health').get(healthCheck);
AllRoutes.use('/test',TestRoutes)
//setting routes
AllRoutes.use('/setting', settingRoute);
AllRoutes.route('/setting/:id').get(getSetting);

//staff routes
AllRoutes.use('/staff',staffRoutes);

//patientMedication routes
AllRoutes.use('/Medication', medicationRouter);

//patients routes
AllRoutes.route('/patient', PatientRoute);

// Export the router
export default AllRoutes;

