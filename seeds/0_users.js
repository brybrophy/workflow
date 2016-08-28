'use strict';

exports.seed = function(knex) {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        id: 1,
        linkedin_id: 'admin',
        email: 'admin@workflow.com',
        access_token: 'AQXrS9hwpgJ1xB6o7e3EMiYTQQwqjSDjaBlW9SwHa7WkBiAa1NEH7X979Ukp18CxW47yyeUfdrvgo_7VlYhgZ9v7OgGlS0HdmnAUY3bkflwXqs4RDmVMPNAd_Vkyg2Lvutrg4Qo0U8Y3zIyTY50Gz0f3oqKZJGt7ns5EclyoVINfaV9O1FQ', // eslint-disable-line max-len
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
