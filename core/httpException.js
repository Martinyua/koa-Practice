/*
 * @Author: Martin
 * @Date: 2020-11-15 10:36:49
 * @LastEditTime: 2020-11-15 12:25:55
 * @FilePath: \koa-app\core\httpException.js
 */

class HttpException extends Error {
    constructor(msg = '服务端错误', errorCode = 10000, httpStatus = 400) {
        super()
        this.msg = msg
        this.errorCode = errorCode
        this.httpStatus = httpStatus
    }
}
class ParameterException extends HttpException {
    constructor(msg,errorCode){
        super()
        this.httpStatus = 400
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000
    }
}
module.exports = { HttpException, ParameterException }