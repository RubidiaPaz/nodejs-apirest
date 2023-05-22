import { Task } from '../models/Task.js';

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll() // findAll es un metodo de sequelize que nos permite obtener todos los registros de la tabla y los guarda en una constante(array)
        res.json({tasks}); // enviamos el array de tareas al cliente
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}


export const createTask = async (req, res) => {
    try {
        const { nombre, done, id_project } = req.body;

        const  newTask = await Task.create({ nombre, done, id_project});
        res.json({newTask}); // enviamos la tarea creada al cliente
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const getTask = async (req, res) => {
    const {id} = req.params

    try {
        const task = await Task.findOne({
            where: {id},
            // attributes: ['nombre'] // solo queremos que nos devuelva el nombre de la tarea
        }) 
        res.json({task}); // enviamos la tarea al cliente
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const updateTask = async (req, res) => {
    const {id} = req.params

    try {
        const task = await Task.findOne({
            where: {id}
        });

        task.set({
            nombre: req.body.nombre,
            done: req.body.done,
            id_project: req.body.id_project
            
            //oh simplemente se pone el objeto req.body
            // req.body

            //set es un metodo de sequelize que nos permite actualizar los campos de un registro 
            // o solo actualiza los campos que le indiquemos
        })
        await task.save()
        return res.json({task})

    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

export const deleteTask = async (req, res) => {
    const {id} = req.params
    try {
        const result =  await Task.destroy({
           where: {id}
        })
        console.log(result);
        res.json({message: 'Tarea eliminada existosamente'});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}
