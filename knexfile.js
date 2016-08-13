'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/blueit_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/blueit_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
