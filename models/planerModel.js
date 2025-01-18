import {database} from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize'

export const PlannerModel = database.define("planner", {
    id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    clientName: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },

    country: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    travelDate: {
        type: DataTypes.STRING(20),
        allowNull: false
    },

    returnDate: {
        type: DataTypes.STRING(20),
        allowNull: true
    },

    tourAttractions: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    timestamps: false
})