'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.string('title').notNullable().defaultTo('');
    table.string('job_post_url').notNullable().defaultTo('');
    table.string('company_name').notNullable().defaultTo('');
    table.string('company_address_1').notNullable().defaultTo('');
    table.string('company_city').notNullable().defaultTo('');
    table.specificType('company_state', 'char(2)').notNullable().defaultTo('');
    table.string('company_zip').notNullable().defaultTo('');
    table.string('company_phone').notNullable().defaultTo('');
    table.json('interview_status').notNullable().defaultTo('{}');
    table.text('notes').notNullable().defaultTo('');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};
