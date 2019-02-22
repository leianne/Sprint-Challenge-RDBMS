
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', function(tbl){
      tbl.increments('projects_id');
      tbl.string('project_name', 60).notNullable().unique();
      tbl.string('project_description', 255).notNullable();
      tbl.boolean('project_completed').notNullable();
      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('projects')
};
