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
}

function addProject(project) {
    const newProject = {...project, project_completed: false}
    return db('projects').insert(newProject)
}
