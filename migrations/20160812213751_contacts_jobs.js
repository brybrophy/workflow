'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('contacts_jobs', (table) => {
    table.increments();
    table
      .integer('contact_id')
      .notNullable()
      .references('id')
      .inTable('contacts')
      .onDelete('CASCADE')
      .index();
    table
      .integer('job_id')
      .notNullable()
      .references('id')
      .inTable('jobs')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts_jobs');
};
