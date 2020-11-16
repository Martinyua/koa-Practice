/*
 * @Author: Martin
 * @Date: 2020-11-16 10:47:27
 * @LastEditTime: 2020-11-16 10:50:01
 * @FilePath: \koa-app\core\db.js
 */
const Sequelize = require('sequelize')

const {
    dbName,
    host,
    port,
    user,
    password
} = require('../config/config').database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: true,
    timezone: '+08:00'
})

module.exports = {
    sequelize
}