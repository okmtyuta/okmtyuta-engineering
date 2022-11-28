const ENVIRONMENT = 'DEVELOPMENT'
const PRODUCTION_ENVIRONMENT_VARIABLE = {
  URL: {
    API: 'https://api.okmtyuta.jp',
    WEB: 'https://okmtyuta.jp',
  },
}

const DEVELOPMENT_ENVIRONMENT_VARIABLE = {
  URL: {
    API: 'http://localhost:8000',
    WEB: 'http://localhost:3000',
  },
}

const CONSTANTS = DEVELOPMENT_ENVIRONMENT_VARIABLE

export default CONSTANTS