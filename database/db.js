import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const database = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)

export async function tryToConnect() {
    try{
        database.sync({alter:true})
        await database.authenticate()
        console.log("Sucessfully Connection")
    }
    catch(error) {
        console.log("Error in Connection: ", error)
    }
}

export {database}