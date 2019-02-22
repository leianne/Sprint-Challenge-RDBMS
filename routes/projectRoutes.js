const express = require('express');
const router = express();
const db = require('../data/helpers/projectModel');

// MIDDLEWARE 

const checkNewProject = (req, res, next) => {
    if(req.body.project_name && req.body.project_description){
        next()
    } else {
        res.status(400).json({message: 'Please enter a valid name and description'})
    }
}

// POST a PROJECT
router.post('/', checkNewProject, async (req, res) =>{
    const project = req.body
    try{
        const newProject = await db.addProject(project)
        if(newProject.length > 0){
            res.status(200).json({message: 'Your project was created!'})
        } else{
            res.status(404).json({message: 'Looks like there is an issue on your side... Please try again!'})
        }
    }
    catch(error){
        res.status(500).json({message: 'Sorry for the inconvenience we are working on fixing this issue. Try again later.'})
    }
})

router.get('/', async (req, res) => {
    try{
        const projects = await db.getProjects();
        console.log(projects)
    }
    catch(error){

    }
})
module.exports = router;