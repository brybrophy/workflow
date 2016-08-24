'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('linkedin_id').unique().notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.string('access_token').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
