'use strict';

import logger from './logger';

class BaseController {
    constructor(app, namespace) {
        this.app = app;
        this.namespace = namespace;
    }

    getService() {
        return this.app.instances[this.namespace];
    }

    handle(opts, fn) {
        logger.info('handle with controller - ' + opts.controller);
        let method = opts.method;

        return this[method](opts, fn);
    }

    post(opts, fn) {
        let data = opts.data;

        logger.info(JSON.stringify(data));

        this.getService().create(data, fn);
    }

    get(opts, fn) {
        this.getService().list(opts, fn);
    }

    put(opts, fn) {
        this.getService().update(opts.action, opts.data, fn);
    }

    delete(opts, fn) {
        this.getService().delete(opts.action, fn);
    }
}

export default BaseController;
