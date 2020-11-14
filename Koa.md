# Koa

> 基于Nodejs平台的下一代web开发框架

### koa简介

* Koa 是一个新的 web 框架， 通过利用 async 函数，Koa 帮你丢弃回调函数，并有力地增强错误处理。 Koa 并**没有捆绑任何中间件**， 而是提供了一套优雅的方法，帮助您快速而愉快地编写服务端应用程序。
* 洋葱圈模型
* 精简
* 需要进行二次开发

### koa环境依赖

* ```npm init```
* ```npm intall koa```
* 入口文件：```app.js```
* 运行：```node app.js```
* 自动重启：使用 nodemon 。
  * npm i nodemon -g
  * nodemon app.js
* 路由自动注册：使用require-directory
  * npm i require-directory  --save
  * requireDirectory的三个参数
  * 拆分至**initCore**

### koa中间件

* 前端发送http请求，koa负责接收并且处理该请求

* 中间件其实就是一个函数

* 函数注册之后成为中间件。可以注册多个中间件

  * ```js
    app.use((ctx,next) => {
    
        console.log('Hello Koa')
    
        next()
    
    })
    ```

    

* ctx,next为koa传递的两个参数ctx为上下文，next为执行下一个中间件函数

### Koa洋葱圈模型

* 在koa的中间件中，**通过next函数，将中间件分成了两部分**，next上面的一部分会首先执行，而下面的一部分则会在所有后续的中间件调用之后执行。洋葱模型的打印结果 (1,3,4,2)
* 中间件的调用总是会返回一个Promise()  

### async 和 await

* 由于中间件**默认返回一个Promise**，所以使用await来接受返回的值是终极解决方案。内部调用await的函数，必须在这个函数外部加上**async**

* await实际上就是一个**求值关键字**。相对于直接拿到Promise里面的值。且不仅仅是只能用于Promise

* await**会阻塞当前线程**。把难以处理的**异步函数变成了同步代码**。因为异步难以拿到当前的值  

* **async 函数的任何返回值都会被包装成Promise**

* ```js
  app.use(async (ctx, next) => {
      const start = Date.now()
      const res = await axios.get('https://www.baidu.com')
      const end = Date.now()
      console.log(res)
      console.log(end - start)
  })
  ```

* 使用await可以保证是洋葱圈模型（每一个next()前面都加上await)

* 为什么使用洋葱模型。保证next()调用的中间件都被执行完毕，next()后面才能通过ctx取到相应的值。异步编程的一种解决方案

* 使用中间件调用next()时，一定要加上**await**，才能保证洋葱层模型

### 路由

* ctx.path:获取请求路由

* ctx.method：获取请求方法

* ctx.body设置返回值。koa会自动的将返回格式设置为json

* 使用koa-router （三步，引入实例化，使用，注册）

  * 安装 npm i koa-router --save

  * 引入并且实例化 

     **const** Router **=** require('koa-router')  

    **const** router **=** **new** Router()

  * 使用

    router.get('/', (ctx, next) **=>** {

    ​    ctx.body**=**{key:'test'}

    })

  * 注册 app.use(router.routes())

* 多Router拆分。考虑客户端的兼容性。设计不同的路由

  1. 路径。通过api携带版本号
  2. 查询参数 eg：?version = 1
  3. 通过header

  * 注意循环引用

* 参数处理

  * `ctx.request.body(上下文请求体)`、`ctx.request.query(上下文请求query参数)` 、`ctx.request.header(上下文请求头)`、`ctx.param(路由参数)`
    * ctx.request.body 需要npm安装

* 错误处理

  * ```js
    try{
        xxx
    }catch(error){
        throw error
    }
    ```

  *  try catch 对异步的错误捕捉不到

  * 如果某个函数返回的是Promise。则可以使用async 和 await 来简化异常链条

  * （难以理解，可以多看）async await 里面的throw并不是Promise。需要对function进行promise包装，然后通过reject。可以理解为await只是对**异步函数的Promise有效**。虽然async返回的是一个Promise，但不是**异步函数的Promise**。**需要对异步函数进行Promise包装**

