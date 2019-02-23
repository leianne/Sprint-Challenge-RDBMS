const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    addAction,
}

function addAction(action){
    const newAction = {...action, action_completed: false}
    return db('actions').insert(newAction)
}