import Knex from 'knex';

const TABLE_NAME = 'class_schedule';

export async function up(knex: Knex) {
  return knex.schema.createTable(TABLE_NAME, table => {
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(TABLE_NAME);
}