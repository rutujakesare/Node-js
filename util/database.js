const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'rutuja@38',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
