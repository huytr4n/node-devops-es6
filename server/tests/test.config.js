'use strict';

import expect from 'expect';
import config from '../config';

expect(config.get('dashboard:port')).toEqual(3000);
expect(config.get('nodefined:nothing')).toEqual(null);

console.log('All tests passed!');
