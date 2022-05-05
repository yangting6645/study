//引入一个包
const path = require('path');
const { isModuleNamespaceObject } = require('util/types');

//webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

     //指定打包文件所在目录
     output:{
         //指定打包文件的目录
         path:path.resolve(__dirname, 'dist'),
         //打包后文件的文件
         filename:"bundle.js"
     }
}