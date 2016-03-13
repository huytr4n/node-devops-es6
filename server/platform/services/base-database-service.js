'use strict';

class BaseService {
    constructor(model) {
        this.model = model;
    }

    /**
     * Basic methods
     */
    getOne(opts, fn) {
        return this.model.getOne(opts, fn);
    }

    getById(id, fn) {
        return this.model.getById(id, fn);
    }

    list(opts, fn) {
        // TODO: pagination
        return this.model.list(opts, fn);
    }

    create(data, fn) {
        return this.model.save(data, fn);
    }

    update(id, data, fn) {
        return this.model.update(id, data, fn);
    }

    delete(id, fn) {
        return this.model.delete(id, fn);
    }
}

/**
 * Expose.
 */
export default BaseService;
