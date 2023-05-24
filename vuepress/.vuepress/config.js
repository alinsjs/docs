const {version} = require('../../package.json');
const path = require('path');

module.exports = {
    title: `Alins (v${version})`, // 标题
    configureWebpack: () => {
        const NODE_ENV = process.env.NODE_ENV;
        // 判断是否是生产环境
        if (NODE_ENV === 'production') {
            return {
                output: {
                    publicPath: 'https://cdn.jsdelivr.net/gh/alinsjs/docs@gh-pages/'
                    // publicPath: '/docs/' // debug
                },
                resolve: {
                    // 配置路径别名
                    alias: {
                        'public': path.resolve(__dirname, './public')
                    }
                }
            };
        } else {
            return {
                resolve: {
                    // 配置路径别名
                    alias: {
                        'public': path.resolve(__dirname, './public')
                    }
                }
            };
        }
    },
    description: 'Alins - All-in-JS Web FrameWork', // 描述
    keywords: 'alins,all-in-js,css-in-js,web-framework',
    dest: './docs/', // 基本url
    base: '/docs/', // gh-pages分支这里需要改成 / 因为 cncha\r.js.org的配置
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: 'https://shiyix.cn/images/alins.ico'}], // 增加一个自定义的 favicon
        ['script', {src: `https://cdn.jsdelivr.net/npm/alins@${version}`}],
        ['script', {src: `https://cdn.jsdelivr.net/npm/alins-style@${version}`}],
        // dev use
        // ['script', {src: `/alins.min.js`}],
        // ['script', {src: `/alins-style.min.js`}],
    ],
    // dest: './dist', //打包位置
    port: 6868, // 端口号
    // 主题配置
    devServer: {
        proxy: {
            '/api': {
                target: 'https://shiyix.cn/',
                // pathRewrite: {'^/remote': ''},
                changeOrigin: true,
                secure: false
            }
        }
    },
    themeConfig: {
        // 顶部导航栏配置
        nav: [
            {text: 'Home', link: '/'}, // 内部链接 以docs为根目录
            // {text: '捐赠', link: '/guide/donate'},
            // {text: 'GitHub', link: 'https://www.github.com/alinsjs/alins'},
            {text: '中文', link: 'https://alinsjs.github.io/docs-cn'},
            {
                text: 'Start',
                items: [
                    {text: 'Introduction', link: '/guide/intro'},
                    {text: 'Samples', link: '/guide/sample'},
                    {text: 'Install', link: '/guide/install'},
                    {text: 'Version', link: '/guide/version'},
                    // {text: '捐赠', link: '/guide/donate'},
                ]
            },
            {
                text: 'Docs',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'Dom-Builder', link: '/doc/dom'},
                    {text: 'Event', link: '/doc/on'},
                    {text: 'Component', link: '/doc/comp'},
                    {text: 'Reactive', link: '/doc/react'},
                    {text: 'Controller', link: '/doc/controller'},
                    {text: 'Life-cycle', link: '/doc/life'},
                    {text: 'Css-in-Js', link: '/doc/style'},
                ],
            },
            {
                text: 'GitHub',
                items: [
                    {text: 'Alins', link: 'https://www.github.com/alinsjs/alins'},
                    {text: 'Docs', link: 'https://www.github.com/alinsjs/docs'},
                    {text: 'Author', link: 'https://www.github.com/theajack'}, // 外部链接
                    // {text: 'Gitee地址', link: 'http://www.gitee.com/theajack'},
                    // {
                    //     text: 'CSDN账号',
                    //     link: 'https://blog.csdn.net/yanxiaomu',
                    // },
                ],
            },
            // {
            //     text: 'Author',
            //     items: [
            //         {text: 'GitHub', link: 'https://www.github.com/theajack'}, // 外部链接
            //         // {text: 'Gitee地址', link: 'http://www.gitee.com/theajack'},
            //         // {
            //         //     text: 'CSDN账号',
            //         //     link: 'https://blog.csdn.net/yanxiaomu',
            //         // },
            //     ],
            // },
        ],
        // 这里使用的是多个侧边栏设置
        sidebar: {
            // 如果你不需要文档版本功能，只需去掉2.0，1.0文件夹，将md文件直接放在components文件夹下
            '/doc/': [
                {
                    title: 'alins-docs', // 必要的
                    path: '', // 如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton'
                    collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
                    // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
                    children: [
                        {title: 'Dom-Builder', path: 'dom'},
                        {title: 'Event', path: 'on'},
                        {title: 'Component', path: 'comp'},
                        {title: 'Reactive', path: 'react'},
                        {title: 'Controller', path: 'controller'},
                        {title: 'Life-cycle', path: 'life'},
                        {title: 'Css-in-Js', path: 'style'},
                    ],
                },
            ],
            '/guide/': [
                {
                    title: 'Start',
                    path: '',
                    collapsable: false,
                    children: [
                        {title: 'Introduction', path: 'intro'},
                        {title: 'Samples', path: 'sample'},
                        {title: 'Install', path: 'install'},
                        {title: 'Version', path: 'version'},
                        // {title: '捐赠', path: 'donate'},
                    ],
                },
            ],
        },
        sidebarDepth: 1, // 将同时提取markdown中h2，显示在侧边栏上
        lastUpdated: 'Last updated', // 文档更新时间：每个文件git最后提交的时间
    },

    markdown: {
        // lineNumbers: true // 代码块显示行号
    },

    plugins: [
        // 官方回到顶部插件
        '@vuepress/back-to-top',

        // 官方图片放大组件 目前是所有img都可以点击放大。具体配置见https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html
        ['@vuepress/medium-zoom', {selector: 'img'}],
        ['vuepress-plugin-tc-comment', {
            appName: 'alins', // create your own app name
            theme: 'dark',
        }]
    ],

};
