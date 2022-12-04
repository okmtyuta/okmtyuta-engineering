"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ENVIRONMENT = 'DEVELOPMENT';
const PRODUCTION_ENVIRONMENT_VARIABLE = {
    URL: {
        API: 'https://api.okmtyuta.jp',
        WEB: 'https://okmtyuta.jp',
    },
};
const DEVELOPMENT_ENVIRONMENT_VARIABLE = {
    URL: {
        API: 'http://localhost:8000',
        WEB: 'http://localhost:3000',
    },
};
const CONSTANTS = DEVELOPMENT_ENVIRONMENT_VARIABLE;
exports.default = CONSTANTS;
//# sourceMappingURL=constants.js.map