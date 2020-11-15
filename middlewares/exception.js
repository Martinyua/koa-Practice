const { HttpException } = require("../core/httpException")

/*
 * @Author: Martin
 * @Date: 2020-11-15 09:58:18
 * @LastEditTime: 2020-11-15 11:15:18
 * @FilePath: \koa-app\middlewares\exception.js
 */
const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if(global.config.environment === 'dev'){
            throw error
        }
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                requestUrl: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.httpStatus
        }else{
            ctx.body = {
                msg:'we made a mistake (*^▽^*)',
                errorCode: 999,
                requestUrl: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
    }
}

module.exports = catchError