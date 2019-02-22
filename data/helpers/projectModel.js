const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    getProjects,
    addProject
}

function getProjects() {
    return db('projects').innerJoin('actions')
}

function addProject(project) {
    const newProject = {...project, project_completed: false}
    return db('projects').insert(newProject)
}