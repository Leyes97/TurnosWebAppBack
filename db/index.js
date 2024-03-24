import Sequelize from 'sequelize';

const db = new Sequelize('TurnosWebApp', 'postgres', '12344321', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export default db;
