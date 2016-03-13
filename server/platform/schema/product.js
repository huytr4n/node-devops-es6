'use strict';

import BaseModel from '../services/base-model';

class Product extends BaseModel {
    constructor() {
        let namespace = 'product';
        super(namespace);
    }
}

export default Product;
