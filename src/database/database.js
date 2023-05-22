import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('projectsdb', 'rubidia', '12345', { // projectsdb is the name of the database, rubidia is the username, 12345 is the password
    host: '10.168.241.199',
    port: 5439,
    dialect: 'postgres',
});