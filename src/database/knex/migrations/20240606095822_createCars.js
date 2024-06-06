
//criar a tabela notes
exports.up = knex => knex.schema.createTable("cars", table => {
  table.increments("id").primary();
  table.text("name")
  table.text("brand")
  table.text("model")
  table.integer("year")
  table.text("color").defaultTo("black")
  table.date("created_at").default(knex.fn.now()).notNullable()
  table.date("updated_at").default(knex.fn.now()).notNullable()
});

//remover a tabela
exports.down = knex => knex.schema.dropTable("cars");