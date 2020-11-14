/*
 * @Author: Martin
 * @Date: 2020-11-14 09:50:34
 * @LastEditTime: 2020-11-14 15:05:10
 * @FilePath: \koa-app\app.js
 */
const Koa = require('koa')  //import from 在node中处于实验特性
const axios = require('axios')
const Router = require('koa-router')

const app = new Koa() //应用程序对象，其中包括了很多中间件
const router = new Router()

//前端发送http请求 Koa接受http请求
//中间件：其实就是一个函数
//注册：注册之后函数成为中间件，可以注册多个中间件
//ctx,next 分别为koa传递的两个参数，ctx为上下文，next()为执行一下个中间件函数

// app.use((ctx,next) => {
//     console.log('Hello Koa')
//     next()
// })
// app.use((ctx,next) =>{
//     console.log('hello Martinyu')
//     next()
// })

// - 由于中间件**默认返回一个Promise**，所以使用await来接受返回的值是终极解决方案。内部调用await的函数，必须在这个函数外部加上**async**
// - await实际上就是一个**求值关键字**。相对于直接拿到Promise里面的值。且不仅仅是只能用于Promise
// - await**会阻塞当前线程**。把难以处理的**异步函数变成了同步代码**。因为异步难以拿到当前的值  
// - **async 函数的任何返回值都会被包装成Promise
// app.use(async (ctx, next) => {
//     await next()
//     console.log(ctx.r)
// })


/**app.use(async (ctx, next) => {
    // const start = Date.now()
    const res = await axios.get('https://www.baidu.com')
    // const end = Date.now()
    // console.log(res)
    // console.log(end - start)
    if (ctx.path === '/index' && ctx.method === 'GET') {
        ctx.body = { key: "test" }
    }
    // ctx.r = res.data
})*/
router.get('/', (ctx, next) => {
    ctx.body={key:'test'}
})
app.use(router.routes())

app.listen(3000) 