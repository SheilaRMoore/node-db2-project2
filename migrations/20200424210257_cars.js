exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.integer('year').notNullable();
        tbl.text('VIN', 128).notNullable()
        tbl.text('transmission', 128).notNullable()
        tbl.integer('mileage').notNullable();
       
 
     })
    };


exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
