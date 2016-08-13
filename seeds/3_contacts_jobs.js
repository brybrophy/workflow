'use strict';

exports.seed = function(knex) {
  return knex('contacts_jobs').del()
    .then(() => {
      return knex('contacts_jobs').insert([{
        id: 1,
        contact_id: 1,
        job_id: 1,
        created_at: new Date('2016-08-13 19:25:00 UTC'),
        updated_at: new Date('2016-08-13 19:25:00 UTC')
      },
      {
        id: 2,
        contact_id: 1,
        job_id: 2,
        created_at: new Date('2016-08-13 19:25:00 UTC'),
        updated_at: new Date('2016-08-13 19:25:00 UTC')
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('contacts_jobs_id_seq', (SELECT MAX(id) FROM contacts_jobs));"
      );
    });
};
