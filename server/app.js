'use strict';

import express from 'express';
import Server from './server';

const port = process.env.PORT || 3000;

const app = express();

let server = new Server(app, {port: port});

server.start();
