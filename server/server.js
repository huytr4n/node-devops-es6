'use strict';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import logger from './utils/logger';

import DatabaseManager from './platform';
import Router from './utils/router';

class Server {
    constructor(app, opts) {
        this.opts = opts;
        this.app = app;

        this.controllers = {};
        this.instances = {};

        this.initControllers();
        this.config();

        let router = new Router(this.app, this.controllers);
        router.handle();
    }

    initControllers() {
        let self = this;

        // init database first
        this.initDatabase();

        // read all controller files in their directory
        let controllers = fs.readdirSync(path.join(__dirname, 'controllers'));

        // register controllers
        controllers.map(controller => {
            let controllerPath = './controllers/' + path.basename(controller, '.js');
            let ControllerClass = require(controllerPath);

            self.controllers[controller] = new ControllerClass(self.instances);
        });
    }

    initDatabase() {
        this.instances = new DatabaseManager();
    }

    start() {
        this.app.listen(this.opts.port, () => {
            logger.info('server is started at port ' + this.opts.port);
        });
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));
        this.app.use(methodOverride('X-HTTP-Method-Override'));
        this.app.use(morgan('combined'));
    }
}


export default Server;
