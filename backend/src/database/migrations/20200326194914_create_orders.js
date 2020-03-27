exports.up = function(knex) {
  return knex.schema.createTable('orders', function(table) {
    table.increments();

    table.string('order_name').notNullable();
    table.decimal('price').notNullable();
    table.decimal('amount').notNullable();
    table.string('address').notNullable();

    table.string('user_id').notNullable();

    table
      .foreign('user_id')
      .references('id')
      .inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
