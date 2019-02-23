const express = require('express');
const router = express();
const db = require('../data/helpers/actionModel');
const dbProjects = require('../data/helpers/projectModel');

// MIDDLEWARE 

const checkNewAction = (req, res, next) => {
    if(req.body.action_description) {
        next()
    } else {
        res.status(404).json({message: 'Please add an action description!'})
    }
}

// POST an ACTION
router.post('/:id', checkNewAction, async (req, res) => {
    const id = req.params.id;
    const action = {...req.body, project_id: id};
    try{
        const project = await dbProjects.getProjects(id)
        if(project) {
            const newAction = await db.addAction(action)
            if(newAction.length > 0) {
                res.status(200).json({message: 'Your action was created!'})
            } else{
                res.status(404).json({message: 'Looks like there is an issue on your side... Please try again!'})
            }
        } else {
            res.status(400).json({message: 'We cant find that project. Please enter a valid project number!'})
        }
    }
    catch(error){
        res.status(500).json({message: 'Sorry for the inconvenience we are working on fixing this issue. Try again later.'})
    }
})

module.exports = router;
