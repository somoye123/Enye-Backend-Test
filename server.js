/*
 * Primary file for the API
 */

//  Dependencies
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import RateRoute from './routes/rateRoute';

dotenv.config();

// Instantiate the server
const app = express();
