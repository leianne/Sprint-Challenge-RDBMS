exports.seed = function(knex, Promise) {
    return knex('projects')
    .then(function() {
        return knex('projects').insert([
            {
                project_name: 'Go to Movies',
                project_description: 'Watch a mystery',
                project_completed: false
            },
            {
                project_name: 'Go to School',
                project_description: 'Learn something beneficial',
                project_completed: true
            },
            {
                project_name: 'Go to Work',
                project_description: 'Make some cash',
                project_completed: false
            },
        ]);
    });
};