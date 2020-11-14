/*
 * @Author: Martin
 * @Date: 2020-11-14 16:09:59
 * @LastEditTime: 2020-11-14 17:30:45
 * @FilePath: \koa-app\app\api\v1\book.js
 */
const Router = require('koa-router')

const router = new Router()

router.get('/v1/book/index', (ctx, next) => {
    ctx.body = { key: 'hello' }
})
router.post('/v1/book/add', (ctx, next) => {
    
})

module.exports = router