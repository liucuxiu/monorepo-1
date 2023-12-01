/**
 * Setup express server.
 */

import express from 'express';
import 'express-async-errors';


// **** Variables **** //

const app = express();


// **** Setup **** //

// Basic middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
