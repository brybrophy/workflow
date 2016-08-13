'use strict';

exports.up = function(knex) {
  return knex.schema.createTable('contacts', (table) => {
    table.increments();
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').unique().notNullable().defaultTo('');
    table.string('phone').unique().notNullable().defaultTo('');
    table.string('linked_in_url').notNullable().defaultTo('');
    table.integer('user_id')
    .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index()
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('contacts');
};
