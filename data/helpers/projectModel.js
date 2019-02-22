const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    addProject
}

function getProjects(id) {
    if(id){
        return db('projects').where({projects_id: id}).first()
    }

    return db('projects').innerJoin('actions', function(){
        this.on('projects.projects_id' ,'=', 'actions.project_id')
    })
}

function addProject(project) {
    const newProject = {...project, project_completed: false}
    return db('projects').insert(newProject)
}

 