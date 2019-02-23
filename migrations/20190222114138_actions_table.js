
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', function(tbl){
      tbl.increments('action_id');
      tbl.string('action_description', 180).notNullable();
      tbl.string('action_notes', 255);
      tbl.boolean('action_completed').notNullable();
      tbl.integer('project_id').unsigned();
      tbl.foreign('project_id').references('projects.project_id')
      tbl.timestamps(true, true);      
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
};
