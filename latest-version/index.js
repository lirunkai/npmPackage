/**
 * const 声明一个常量
 * const 特性
 * 块级作用域 
 * let const变量的作用域限制在块里 var声明的变量作用域在函数内
 * 暂时性死区(不能在声明前使用) 没有变量提升
 * let const 不能重复声明
 */
const packageJson = require('package-json')

/**
 * async 异步处理流程三大件之一 Promise generator
 * await 之后跟一个promise
 * {} 解构 数组时 根据位置解构 对象时 根据变量名解构
 * 解构时可以对变量名进行重新命名 let { id: user_id} = {id: 1}
 */
const latestVersion = async (packageName, options) => {
  const {version} = await packageJson(packageName.toLowerCase(), options);
  return version;
}

/**
 * commonjs nodejs中使用的模块系统
 * 通过module.exports 导出
 * 通过require 引入
 */
module.exports = latestVersion
// 兼容ESModule
module.exports.default = latestVersion