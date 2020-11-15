/*
 * @Author: Martin
 * @Date: 2020-11-14 09:50:34
 * @LastEditTime: 2020-11-15 10:15:56
 * @FilePath: \koa-app\app.js
 */

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const InitManager = require('./core/initCore')
const catchError = require('./middlewares/exception')
const app = new Koa()


app.use(catchError)
app.use(bodyParser())
/**
 * 自动导入路由
 */
InitManager.initCore(app)


app.listen(3000)