import {PlannerService} from '../services/plannerService.js';

const instancePlannerService = new PlannerService()

export async function createPlanner(req, res) {
    const {clientName, country, travelDate, returnDate, tourAttractions} = req.body

    try {
        const result = await instancePlannerService.createPlanner(clientName, country, travelDate, returnDate, tourAttractions)
        return res.status(200).json({result})
    }
    catch(error){
        return res.status(400).json({message: `Error: ${error.message}`})
    }
}

export async function getAll() {
    try {
        const result = await instancePlannerService.getAll()
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: `Error: ${error.message}`})
    }
}

export async function getById(req, res) {
    const {id} = req.params

    try{
        const result = await instancePlannerService.getPlannerById(id)
        return res.status(200).json({result})
    }
    catch(error) {
        return res.status(400).json({message: `Error: ${error.message}`})
    }
}

export async function updatePlanner(req, res) {
    const {id} = req.params
    const {newPlanner} = req.body

    try {
        await instancePlannerService.upNewPlanner(id, newPlanner)
        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: `Error: ${error.message}`})
    }
}

export async function delPlanner(req, res) {
    const {id} = req.params
    
    try{
        await instancePlannerService.delPlanner(id)
        return res.status(200).json({message: 'Sucessfully'})
    }
    catch(error) {
        return res.status(400).json({message: `Error: ${error.message}`})
    }
}