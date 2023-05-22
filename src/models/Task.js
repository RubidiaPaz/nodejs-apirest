import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Task = sequelize.define('task',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    // id_project:{
    //     type: DataTypes.INTEGER,
    
    // }

})