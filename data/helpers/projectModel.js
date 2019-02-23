const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    addProject
}

function getProjects(id) {
    if(id){
        return db('projects').innerJoin('actions', function(){
            this.on('projects.projects_id' ,'=', 'actions.project_id')
       })
    }
    return db('projects')

    
}

function addProject(project) {
    return db('projects').insert(project)
}

 