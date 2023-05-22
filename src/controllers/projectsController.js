import { Project } from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    // console.log(projects);
    res.json(projects); // res.json es para enviar un json al cliente es la respuesta del servidor
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getProject = async (req, res) => {
  try {
    const { id } = req.params; // req.params es para obtener los parametros que se envian por la url
  
    const project = await Project.findOne({ where: { id } })

    if (!project) { // si el proyecto no existe
      return res.status(404).json({ message: "El proyecto no existe" });
    }
  
    res.json(project); // res.json es para enviar un json al cliente es la respuesta del servidor
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const createProject = async (req, res) => {
  const { nombre, prioridad, descripcion } = req.body;

  try {
    const newProject = await Project.create({
      nombre,
      prioridad,
      descripcion,
    });

    // console.log(newProject);
    res.json(newProject);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { nombre, prioridad, descripcion } = req.body; // req.body es para obtener los datos que se envian por el body -- estas serian los campos de la tabla
  const { id } = req.params; // req.params es para obtener el id que se envian por la url

  try {
    const project = await Project.findOne({ where: { id } });
    project.nombre = nombre;
    project.prioridad = prioridad;
    project.descripcion = descripcion;
    await project.save(); //guarda los cambios en la base de datos
    
    res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params; // req.params es para obtener los parametros que se envian por la url
    await Project.destroy({
      where: {
        id,
      },
    });
    res.json({ message: "El proyecto sea eliminado correctamente" });
    res.sendStatus(204); // 204 es para decir que no hay contenido que todo salio bien
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProjectTasks = async (req, res) => {
  const {id} = req. params;
  const tasks =  await Task.findAll({ //esto da un arreglo de tareas
    where: {id_project: id}
  })
  res.json(tasks)
}