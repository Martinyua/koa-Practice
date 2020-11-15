/*
 * @Author: Martin
 * @Date: 2020-11-15 14:56:11
 * @LastEditTime: 2020-11-15 16:12:48
 * @FilePath: \koa-app\app\validator\validator.js
 */
/**
 * 使用validator
 */
const { LinValidator, Rule } = require('../../core/lin-validator')

class PostiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            new Rule('isInt', '需要是正整数', { min: 1 })
        ]
    }
}

module.exports = { PostiveIntegerValidator }