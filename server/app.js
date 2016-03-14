'use strict';

import express from 'express';
import Server from './server';
import config from './config';

const port = config.get('dashboard:port');

const app = express();

let server = new Server(app, {port: port});

server.start();
