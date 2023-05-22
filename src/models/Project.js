import {DataTypes} from 'sequelize';
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';


export const Project = sequelize.define('projects',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre:{
        type: DataTypes.STRING,
    },
    prioridad:{
        type: DataTypes.INTEGER,
    },
    descripcion:{
        type: DataTypes.STRING,
    },
},{
    timestamps:true
});

Project.hasMany(Task, {
    foreignKey: 'id_project', 
    sourceKey: 'id' //
}); // de uno a muchos -- un proyecto tiene muchas tareas

Task.belongsTo(Project, {
    foreignKey: 'id_project', 
    targetKey: 'id'
}); // de muchos a muchos -- muchas tareas pertenecen a un proyecto
