'use strict';

import moment from 'moment';
import 'colors';

class Logger {
    constructor(opts) {
        this.opts = opts;
    }

    info(message) {
        return this.log(message, 'INFO');
    }

    debug(message) {
        return this.log(message, 'DEBUG');
    }

    log(message, level='INFO') {
        let logString = [this.getTime(), level, message].join(' - ');
        let color = this.getColor(level);

        console.log(logString[color]);

        return;
    }

    getTime() {
        return moment().format('YYYY-MM-DD hh:mm::ss');
    }

    getColor(level) {
        if (level === 'INFO') {
            return 'green';
        } else if (level === 'DEBUG') {
            return 'yellow';
        } else if (level === 'ERROR') {
            return 'red';
        }

        return;
    }
}

const logger = new Logger();

export default logger;
