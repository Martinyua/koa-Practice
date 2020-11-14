/*
 * @Author: Martin
 * @Date: 2020-11-14 09:50:34
 * @LastEditTime: 2020-11-14 17:10:11
 * @FilePath: \koa-app\app.js
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const InitManager = require('./core/initCore')

const app = new Koa()

/**
 * 自动导入路由
 */
InitManager.initCore(app)

app.use(bodyParser())
app.listen(3000)