'use strict';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import logger from './utils/logger';

import DatabaseManager from './platform';
import Router from './utils/router';

import ProductController from './controllers/products';


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
        this.initDatabase();
        this.controllers.products = new ProductController(this.instances);
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
