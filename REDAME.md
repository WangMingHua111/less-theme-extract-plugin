# 1.使用示例        
        const LessThemeExtractPlugin = require('./less-theme-extract-plugin')
        module.exports = {
            chainWebpack: config => {
                config.module
                    .rule('less')
                    .test(/\.less$/)
                    .use('less-loader')
                    .loader(LessThemeExtractPlugin.loader)
                    .end()
            },

            configureWebpack: config => {
                if (process.env.NODE_ENV === 'production') {
                    return {
                        plugins: [
                            new LessThemeExtractPlugin('red', {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'color': '#673ab7',
                                },
                            }),
                            new LessThemeExtractPlugin('red2', {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'color': 'red',
                                },
                            }),
                        ]
                    }
                }
            },
            runtimeCompiler: true,
            publicPath: './'
        }