const target = 'http://test-control-back.test176.cn'
module.exports = {
    // chainWebpack: config => {
    //     //发布模式
    //     config.when(process.env.NODE_ENV === 'production', config => {
    //         //add 添加新的打包入口
    //         config.entry('app').clear().add('./src/main-prod.js')

    //         //使用externals设置排除项
    //         config.set('externals', {
    //             // vue: 'Vue',
    //             // 'vue-router': 'VueRouter',
    //             // axios: 'axios',
    //             // lodash: '_',
    //         })
    //     })
    //     //开发模式
    //     config.when(process.env.NODE_ENV === 'development', config => {
    //         config.entry('app').clear().add('./src/main-dev.js')
    //     })
    // }

    //  outputDir: "dist", //打包后的项目目录名称
    //  assetsDir: 'static', // 配置js、css静态资源二级目录的位置
    //  indexPath: 'index.html', // 打包后index.html名称
    publicPath: './',
    devServer: {
        port: 8080, // 端口号
        host: 'localhost',
        open: true, //配置自动启动浏览器
        // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
        proxy: {
            '/companyData': {
                target: target,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/companyData": "/companyData"
                }
            },
            '/sanfangBack': {
                target: target,
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    "^/sanfangBack": "/sanfangBack"
                }
            }
        }
    },
    productionSourceMap: true, // false时候build打包时取消.map文件
}
//  vscode同步gist： bbc2d960388cc6d7d033754976ec1ec7
//  字体名字：'Fira Code',Consolas, 'Courier New', monospace
//  主题颜色： Dracula