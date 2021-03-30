
; (function (window) {
    function ThemeSwitcher() {
        // debugger// eslint-disable-line no-debugger
        this.development = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'
        if (this.development) this.initDevelopmentThemes()
        else this.initProductionThemes()
    }
    ThemeSwitcher.prototype = {
        setTheme(theme) {
            let themes = this.themes
            Object.keys(themes).forEach(key => {
                themes[key].forEach(tag => tag.disabled = key !== theme)
            })
            this._theme = theme
        },
        getTheme() {
            return this._theme
        },
        getThemes() {
            return Object.keys(this.themes)
        },
        // 测试发现运行环境无法切换主题，暂时不处理该代码
        initDevelopmentThemes() {
            let themes = {}
            document.querySelectorAll('link').forEach(tag => {
                let rel = tag.getAttribute('rel') || ''
                let href = tag.getAttribute('href') || ''
                if (rel && href && (/stylesheet/i.test(rel) || /prefetch/i.test(rel)) && /theme\.\w+\./i.test(href)) {
                    let theme = href.match(/theme\.(\w+)\./i)[1]
                    if (!themes[theme]) themes[theme] = [tag]
                    else themes[theme].push(tag)
                    if (!tag.disabled) this._theme = theme
                }
            })
            // Object.keys(themes).slice(1).forEach(key => themes[key].forEach(tag => tag.disabled = true))
            this.themes = themes
        },
        initProductionThemes() {
            let themes = {}
            // 主题检索
            document.querySelectorAll('link[theme]').forEach(tag => {
                let theme = tag.getAttribute('theme')
                if (!themes[theme]) themes[theme] = [tag]
                else themes[theme].push(tag)
                if (!tag.disabled) this._theme = theme
            })
            Object.keys(themes).forEach(theme => {
                console.log(`Theme：${theme}`)
            })
            this.themes = themes
        }
    }
    window.themeSwitcher = new ThemeSwitcher()
})(window);