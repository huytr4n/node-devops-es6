'use strict';

import BaseService from './base-database-service';
import Product from '../schema/product';

class Products extends BaseService {
    constructor() {
        let model = new Product();
        super(model);
    }
}

export default Products;
