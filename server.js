import express from 'express'
import {routersPlanner} from './routes/plannerRoute.js'
import {tryToConnect} from './database/db.js'

const server = express()
const port = 8000

server.use(express.json())
server.use(routersPlanner)

server.listen(port, () => {
    tryToConnect()
    console.log('On port: ', port)
})