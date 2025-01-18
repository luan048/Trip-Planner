import { Router } from "express";
import {createPlanner, delPlanner, getAll, getById, updatePlanner} from '../controllers/plannerController.js';

const routersPlanner = Router()

routersPlanner.post("/createPlanner", async(req, res) => {
    return await createPlanner(req, res)
})

routersPlanner.get("/", async(req, res) => {
    return await getAll(req, res)
})

routersPlanner.get("/:id", async(req, res) => {
    return await getById(req, res)
})

routersPlanner.put("/upDate/:id", async(req, res) => {
    return await updatePlanner(req, res)
})

routersPlanner.delete("/:id", async(req, res) => {
    return await delPlanner(req, res)
})

export {routersPlanner}