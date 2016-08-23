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
    table.string('interview_status').notNullable().defaultTo('');
    table.dateTime('interview_informational');
    table.dateTime('interview_applied');
    table.dateTime('interview_phone');
    table.dateTime('interview_technical');
    table.dateTime('interview_onsite');
    table.dateTime('interview_take_home');
    table.dateTime('interview_offer');
    table.dateTime('interview_rejected');
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
