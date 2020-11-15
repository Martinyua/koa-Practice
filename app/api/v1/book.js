/*
 * @Author: Martin
 * @Date: 2020-11-14 16:09:59
 * @LastEditTime: 2020-11-15 15:42:27
 * @FilePath: \koa-app\app\api\v1\book.js
 */
const Router = require('koa-router')
const {HttpException,ParameterException} = require('../../../core/httpException')
const {PostiveIntegerValidator} = require('../../validator/validator')
const router = new Router()
 
router.post('/v1/:id/book/index', (ctx, next) => {
    ctx.body = { key: 'hello' }
    const v =new PostiveIntegerValidator().validate(ctx)
})
router.get('/v1/book/add', (ctx, next) => {
    ctx.body = { key: 'hello' }
    if(true){
        const error = new ParameterException()
        throw error
    }
})

module.exports = router