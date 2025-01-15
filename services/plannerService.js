import {PlannerModel} from '../models/planerModel.js'
import { database } from '../database/db.js'

export class PlannerService{

    async createPlanner(clientName, country, travelDate, returnDate, tourAttractions) {
        try{
            await database.sync()
            const newPlanner = await PlannerModel.create({clientName, country, travelDate, returnDate, tourAttractions})
            return {
                statusValue: 200,
                message: 'Sucessfully Created',
                id: newPlanner.id
            }
        }
        catch(error) {
            console.log('Error on Create Services: ', error)
        }
    }

    async getAll() {
        try{
            await database.sync()
            const planners = await PlannerModel.findAll()
            return {
                statusValue: 200,
                message: 'Sucessfully',
                planners: planners
            }
        }
        catch(error) {
            console.log('Error on List All: ', error)
        }
    }

    async getPlannerById(id) {
        try{
            const planner = await PlannerModel.findByPk(id)
            if(planner){
                return {
                    statusValue: 200,
                    message: 'Sucessfully',
                    planner: planner
                }
            }
            else {
                return {
                    statusValue: 404,
                    message: 'Planner not found'
                }
            }
        }
        catch(error) {
            console.log('Error on List By Id: ', error)
        }
    }

    async upNewPlanner(id, newClientName, newCountry, newTravelDate, newReturnDate, newTourAttractions) {
        try {
            await database.sync()
            const planner = await PlannerModel.findByPk(id)
            planner.update({clientName: newClientName, country: newCountry, travelDate: newTravelDate, returnDate: newReturnDate, tourAttractions: newTourAttractions})
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }
        catch(error) {
            console.log('Error on Update: ', error)
        }
    }

    async delPlanner(id) {
        try{
            await database.sync()
            const planner = await PlannerModel.findByPk(id)
            planner.destroy()
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }
        catch(error) {
            console.log('Error on Delete: ', error)
        }
    }
}