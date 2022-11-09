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
    base: '/docs/', // gh-pages分支这里需要改成 / 因为 cnchar.js.org的配置
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', {rel: 'icon', href: 'https://shiyix.cn/alins.ico'}], // 增加一个自定义的 favicon
        // ['script', {src: `https://cdn.jsdelivr.net/npm/alins@${version}`}],
        // ['script', {src: `https://cdn.jsdelivr.net/npm/alins-style@${version}`}],
        // dev use
        ['script', {src: `/alins.min.js`}],
        ['script', {src: `/alins-style.min.js`}],
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
            {text: '主页', link: '/'}, // 内部链接 以docs为根目录
            // {text: '捐赠', link: '/guide/donate'},
            // {text: 'GitHub', link: 'https://www.github.com/alinsjs/alins'},
            
            {
                text: '起步',
                items: [
                    {text: '简介', link: '/guide/intro'},
                    {text: '示例程序', link: '/guide/sample'},
                    {text: '安装使用', link: '/guide/install'},
                    {text: '更新日志', link: '/guide/version'},
                    // {text: '捐赠', link: '/guide/donate'},
                ]
            },
            {
                text: '文档',
                // 这里是下拉列表展现形式。
                items: [
                    {text: 'dom构造', link: '/doc/dom'},
                    {text: '事件', link: '/doc/on'},
                    {text: '组件', link: '/doc/comp'},
                    {text: '响应式数据', link: '/doc/react'},
                    {text: '控制器', link: '/doc/controller'},
                    {text: '生命周期', link: '/doc/life'},
                    {text: 'css-in-js', link: '/doc/style'},
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
                    title: 'alins文档', // 必要的
                    path: '', // 如果你不想'基础组件'可点击并有对应说明，就直接设为空，或者不写,并且nav的link也不要指向 '/components/2.0/'而是'/components/2.0/catButton'
                    collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
                    // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
                    children: [
                        {title: 'dom构造', path: 'dom'},
                        {title: '事件', path: 'on'},
                        {title: '组件', path: 'comp'},
                        {title: '响应式数据', path: 'react'},
                        {title: '控制器', path: 'controller'},
                        {title: '生命周期', path: 'life'},
                        {title: 'css-in-js', path: 'style'},
                    ],
                },
            ],
            '/guide/': [
                {
                    title: '起步',
                    path: '',
                    collapsable: false,
                    children: [
                        {title: '简介', path: 'intro'},
                        {title: '示例程序', path: 'sample'},
                        {title: '安装使用', path: 'install'},
                        {title: '更新日志', path: 'version'},
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
