const config = require('../config/environment');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Todo = sequelize.define('todos',{
    title: Sequelize.STRING,
    sub_title: Sequelize.STRING,
    importance: Sequelize.INTEGER
});

module.exports = {
    sequelize: sequelize,
    Todo: Todo
}