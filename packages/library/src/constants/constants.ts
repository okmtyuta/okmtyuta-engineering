const ENVIRONMENT = 'DEVELOPMENT';
const PRODUCTION_ENVIRONMENT_VARIABLE = {
  URL: {
    API: 'https://api.okmtyuta.jp',
    WEB: 'https://okmtyuta.jp',
  },
};

const DEVELOPMENT_ENVIRONMENT_VARIABLE = {
  URL: {
    API: {
      ARTICLE: {
        CREATE: 'http://localhost:8001/article/register',
        DELETE_ALL: 'http://localhost:8001/article/deleteAll',
        GET_ALL: 'http://localhost:8001/article/list'
      },
    },
    WEB: 'http://localhost:3000',
  },
};

const CONSTANTS = DEVELOPMENT_ENVIRONMENT_VARIABLE;

export default CONSTANTS;
