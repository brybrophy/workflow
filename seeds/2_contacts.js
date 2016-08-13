'use strict';

exports.seed = function(knex) {
  return knex('contacts').del()
    .then(() => {
      return knex('contacts').insert([{
        id: 1,
        first_name: 'bobby',
        last_name: 'kennedy',
        email: 'admin@workflow.com',
        phone: '5555555555',
        linked_in_url: 'https://www.linkedin.com/in/bobby-joe-kennedy-40b5b0a2',
        user_id: 1,
        created_at: new Date('2016-08-13 11:14:00 UTC'),
        updated_at: new Date('2016-08-13 11:14:00 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('contacts_id_seq', (SELECT MAX(id) FROM contacts));"
      );
    });
};
