'use strict';

import Products from './services/products';

class DatabaseManager {
    constructor() {
        this.app = {};
        this.instances = {};
        this.initServices();
    }

    initServices() {
        this.instances.products = new Products();
    }
}

export default DatabaseManager;
