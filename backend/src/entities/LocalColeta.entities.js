import { DataTypes } from "sequelize";
import { sequelize } from "../database/connection.js";



export const LocalEntity = sequelize.define('location', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { 
        type: DataTypes.STRING(100),
        allowNull: false
    
    },
    public_place:{
        type: DataTypes.STRING(100),
        allowNull:false
    }, 
    number:{
        type: DataTypes.STRING(25),
        allowNull: false
    },
     complement:{
        type: DataTypes.STRING(100),
        allowNull:true
    },
    neighborhood:{
        type: DataTypes.STRING(100),
        allowNull:false
    }, 
    city:{
        type: DataTypes.STRING(30),
        allowNull: false
    }, 
    state:{
        type: DataTypes.STRING(2),
        allowNull: false,
        isUppercase: true
    },
    zip_code:{
        type: DataTypes.STRING(9),
        unique: true,
        allowNull: false
        
    }
})



