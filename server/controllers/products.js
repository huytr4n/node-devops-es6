'use strict';

import BaseController from '../utils/base-controller';

class ProductController extends BaseController {
    constructor(app) {
        super(app, 'products');
    }
}

export default ProductController;
