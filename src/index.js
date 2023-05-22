import app from "./app.js";
import { sequelize } from "./database/database.js";

 async function main() {
   try {

    await sequelize.sync({force: false}); // force: si es true, cada vez que se ejecute el programa, se va a borrar la base de datos y se va a crear de nuevo


    // await sequelize.authenticate(); // authenticate is a method of the sequilize object
    console.log('La conexión a la base de datos se ha realizado correctamente');
    app.listen(4000) // quiere que escuche en el puerto 4000
    console.log('Server esta escuchando en el puerto', 4000);
   } catch (error) {
    console.log('Error al conectar con la base de datos', error);
   }
 }

 main();