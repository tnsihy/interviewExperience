var path = require('path') //nodejs文件相关路径API：path
var webpack = require('webpack')

//在每个模块内部，module变量代表当前模块，exports属性是对外的接口。
module.exports = {
    //path.resolve([...paths]) ..paths是传入的字符串参数，是路径序列或者路径片段
    //__dirname目录名的意思
    context:path.resolve(__dirname,'./src'),
    //entry页面入口文件，即打包从哪个文件开始
    //entry的值有三种类型1字符串2数组3对象  下面是对象
    entry:{
        app:'./app.js'
    },
    // output生成的文件输出到哪个地方去，主要由两个属性path和filename
    //path：可能对应文件路径，也可能是从url访问的情况下的路径
    //filename:用来配置生成的文件名
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'bundle.js'
    },
    //引入js压缩插件，直接写
    plugins:[
        new webpack.optimize.UglifyJsPlugin()
    ]
}