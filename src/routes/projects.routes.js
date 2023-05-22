import { Router } from "express";
import { createProject, deleteProject, getProject, getProjectTasks, getProjects, updateProject} from '../controllers/projectsController.js'

const router = Router();

router.get('/projects', getProjects); // ruta get es para obtener todos los proyectos y manda a llamar a la funcion getProject
router.post('/projects', createProject); //ruta post es para crear un nuevo proyecto y manda a llamar a la funcion createProject
router.put('/projects/:id', updateProject); // ruta put es para actualizar un proyecto en especifico
router.delete('/projects/:id', deleteProject); // ruta delete es para eliminar un proyecto // es para eliminar un proyecto en especifico

router.get('/projects/:id', getProject); // ruta get es para obtener un proyecto en especifico

router.get('/projects/:id/tasks', getProjectTasks); // ruta es para obtener un proyecto y obtener sus tareas

export default router;