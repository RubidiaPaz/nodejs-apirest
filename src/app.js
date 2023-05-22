import express from 'express';
import projectsRoutes from './routes/projects.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

//middleware
app.use(express.json()); // para que el servidor entienda los datos que le enviamos en formato json


app.use(projectsRoutes);
app.use(tasksRoutes);

export default app;