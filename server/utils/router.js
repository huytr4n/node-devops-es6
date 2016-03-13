'use strict';

import logger from './logger';

class Router {
    constructor(app, controllers) {
        this.app = app;
        this.controllers = controllers;
    }

    handle() {
        let self = this;

        this.app.get('/', (req, res) => {
            res.send('This is homepage');
        });

        this.app.all('/api/:controller/:action', (req, res) => {
            self.handleREST(req, res);
        });

        this.app.all('/api/:controller', (req, res) => {
            self.handleREST(req, res);
        });
    }

    handleREST(req, res) {
        let self = this;
        let controller = req.params.controller;
        let action = req.params.action;
        let method = req.method ? req.method.toString().toLowerCase() : null;

        logger.info('api ' + controller + action + method);

        let opts = {
            controller: controller,
            action: action,
            method: method,
            data: req.body,
            req: req,
            res: res
        };

        return self.controllers[controller].handle(opts, (error, results) => {
            if (error) {
                logger.error(error);
                throw Error(error);
            }

            res.send(results);
        });
    }
}

export default Router;
