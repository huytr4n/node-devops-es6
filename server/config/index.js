'use strict';

import fs from 'fs';
import path from 'path';

const configFile = process.env.SETTINGS || 'default';

const configData = fs.readFileSync(path.join(__dirname, configFile + '.json'));

class Config {
    constructor() {
        this.config = JSON.parse(configData);
    }

    get(conf) {
        let self = this;
        let loops = conf.split(':');
        let result;

        loops.map(loop => {
            if (result && typeof result === 'object') {
                result = result[loop];
            } else {
                result = self.config[loop] || null;
            }
        });

        return result;
    }
}

const config = new Config();

export default config;
