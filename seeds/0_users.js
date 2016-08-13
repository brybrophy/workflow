'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        username: 'admin',
        email: 'admin@workflow.com',
        hashed_password: '$2a$12$Q3fh1jeJZ2Q19Yr12aVOxO54a/IvBhS01qWCqxNAZc0ABRxq0NnYq',
        created_at: new Date('2016-07-23 14:26:16 UTC'),
        updated_at: new Date('2016-07-23 14:26:16 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));"
      );
    });
};
