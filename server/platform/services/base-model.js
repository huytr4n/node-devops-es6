'use strict';

import Store from 'jfs';
import uuid from 'uuid';

class BaseModel {
    constructor(namespace) {
        this.namespace = namespace;
        this.model = new Store(this.namespace);
    }

    list(opts, fn) {
        this.model.all(fn);
    }

    save(data, fn) {
        this.model.save(uuid.v4(), data, fn);
    }

    update(id, data, fn) {
        this.model.save(id, data, fn);
    }

    delete(id, fn) {
        this.model.delete(id, fn);
    }
}

/**
 * Expose.
 */
export default BaseModel;
