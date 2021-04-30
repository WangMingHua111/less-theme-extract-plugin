# 1.说明

    npm install -D less-theme-extract-plugin

**必备依赖**

    npm install -D less

    npm install -D less-loader

基于Vue+Webpack4.x的Less变量的主题切换插件，对应Vue3.x项目。

如果需要进行Vue2.x兼容或者不明白怎么使用该插件可附带简单源码发送邮件至 735161977@qq.com

**特别说明**

开发模式时不支持抽取主题，此时要看到对应主题效果请人工设置。

    css: {
            loaderOptions: {
            less: {
                    // 人工设置开发时主题为 default
                    lessOptions: themes.default,
                }
            }
        }

抽取的主题将会在编译后自动注入到SPA页面中，并与生产模式下生效。

# 1.使用示例

**themes.js 文件示例**

    module.exports = {
        'default': {
            javascriptEnabled: true,
            modifyVars: {
                "global-color": 'rgba(0, 0, 0, 0.65)',//自定义全局颜色
                // 'primary-color': '#673ab7',
                "primary-color": '#0d9eec',// 全局主色
                "link-color": '#1890ff',// 链接色
                "success-color": '#52c41a', // 成功色
                "warning-color": '#faad14', // 警告色
                "error-color": " #f5222d", // 错误色
                "font-size-base": "14px", // 主字号
                "heading-color": "rgba(0, 0, 0, 0.85)", // 标题色
                "text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
                "text-color-secondary": " rgba(0, 0, 0, 0.45)", // 次文本色
                "disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
                "border-radius-base": "4px", // 组件/浮层圆角
                "border-color-base": "#d9d9d9", // 边框色
                "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)", // 浮层阴影
                "body-background": "#fff",
                "component-background": "#fff",
                "layout-sider-background": '#fff'
            },
        },
        'red': {
            javascriptEnabled: true,
            modifyVars: {
                "global-color": '#fff',//自定义全局颜色
                'primary-color': 'red',
                "info-color": 'red',
                "link-color": '#1890ff',// 链接色
                "success-color": '#52c41a', // 成功色
                "warning-color": '#faad14', // 警告色
                "error-color": " #f5222d", // 错误色
                "font-size-base": "14px", // 主字号
                "heading-color": "#fff", // 标题色
                "text-color": "#fff", // 主文本色
                "text-color-secondary": "#fff", // 次文本色
                "disabled-color": "rgba(250, 250,250, 0.5)", // 失效色
                "border-radius-base": "4px", // 组件/浮层圆角
                "border-color-base": "#d9d9d9", // 边框色
                "box-shadow-base": "0 2px 8px rgba(0, 0, 0, 0.15)", // 浮层阴影
                "body-background": "rgba(0, 0, 0, 0.85)",
                "component-background": "rgba(0, 0, 0, 0.85)",
                "tag-default-color": "#fff",
                "table-header-bg": "rgba(0, 0, 0, 0.85)",
                "table-header-color": "#fff",
                "table-header-sort-bg": "rgba(0, 0, 0, 0.85)",
                "table-body-sort-bg": "rgba(0, 0, 0, 0.85)",
                "table-row-hover-bg": "#1890ff",
                "table-selected-row-color": 'inherit',
                "table-selected-row-bg": '#fafafa',
                "table-body-selected-sort-bg": '#1890ff',
                "table-selected-row-hover-bg": '#1890ff',
                "table-expanded-row-bg": 'rgba(0, 0, 0, 0.85)',
                "table-padding-vertical": '16px',
                "table-padding-horizontal": '16px',
                "table-footer-bg": "rgba(0, 0, 0, 0.85)",
                "table-footer-color": "#fff",
                "table-header-bg-sm": 'transparent',
                "tabs-card-color": "#fff",
                "tabs-card-head-background": "rgba(0, 0, 0, 0.85)",
                "layout-sider-background": 'rgba(0, 0, 0, 0.85)',
                "item-hover-bg": '#1890ff',
            },
        }
    }

**配置 vue.config.js 文件**

    const LessThemeExtractPlugin = require('less-theme-extract-plugin')
    const { LessThemeExtractPluginGenerator } = LessThemeExtractPlugin

    const themes = require('./themes')

    module.exports = {
        chainWebpack: config => {
            new LessThemeExtractPluginGenerator(rootOptions, themes).chainWebpack(config)
        },
        css: {
            loaderOptions: {
            less: {
                    lessOptions: themes.default,
                }
            }
        }
    }

**获取主题示例**

    window.themeSwitcher.getThemes() // ["default", "red"]

**设置主题示例**

    window.themeSwitcher.setTheme('default')

    // Promise
    window.themeSwitcher.setTheme('default').then(()=>{
        console.log('切换主题完成')
    })