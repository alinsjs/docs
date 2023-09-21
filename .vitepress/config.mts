/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const isProd = true;

const version = '0.0.33'

export default defineConfig({
  title: `Alins Docs(v${version})`,
  description: "The most elegant and concise WebUI framework",
  base: isProd ? '/docs/': '/',
  outDir: './docs',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://shiyix.cn/images/alins.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    // ['meta', { property: 'og:title', content: ogTitle }],
    // ['meta', { property: 'og:image', content: ogImage }],
    // ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:description', content: "The most elegant and concise WebUI framework" }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@alins_js' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    [
      // 'script', {src: `https://unpkg.com/alins-compiler-web@${version}`}
      'script', { 
        src: isProd ? `https://unpkg.com/alins-compiler-web@${version}`
          : `/alins-compiler-web.iife.min.js`
      },
    ],
    ['link', { rel: 'stylesheet', href: isProd 
      ? 'https://unpkg.com/easy-icon@1.1.0/offline/css/easy-icon.css'
      : `/easy-icon.offline.css` 
    }],
    
    // [
    //   'script',
    //   {
    //     src: 'https://cdn.usefathom.com/script.js',
    //     'data-site': 'CBDFBSLI',
    //     'data-spa': 'auto',
    //     defer: '',
    //   },
    // ],
  ],
  locales: {
    root: { label: 'English' },
    en: { label: '简体中文', link: 'https://alinsjs.github.io/docs-cn' },
  },
  themeConfig: {
    logo: 'https://shiyix.cn/images/alins.png',
    siteTitle: 'Alins',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/intro' },
      { text: 'Ecosystem', link: '/ecosystem/plugin' },
      { text: 'Playground', link: 'https://alinsjs.github.io/playground' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Introduction',
              link: '/guide/intro',
            },
            {
              text: 'Compare',
              link: '/guide/compare',
            },
            {
              text: 'Quick Start',
              link: '/guide/quick-start',
            },
            {
              text: 'Concept',
              link: '/guide/concept',
            },
          ]
        },
        {
          text: 'User Manual',
          items: [
            {
              text: 'JSX Extension',
              link: '/guide/jsx',
            },
            {
              text: 'Event',
              link: '/guide/event',
            },
            {
              text: 'Class',
              link: '/guide/class',
            },
            {
              text: 'Style',
              link: '/guide/style',
            },
            {
              text: 'Life Cycle',
              link: '/guide/lifecycle',
            },
            {
              text: 'Reactive Data',
              link: '/guide/reactive',
            },
            {
              text: 'Computed Data',
              link: '/guide/computed',
            },
            {
              text: 'Binding',
              link: '/guide/binding',
            },
            {
              text: 'Component And Flow',
              link: '/guide/component',
            },
            {
              text: 'Logic Block',
              link: '/guide/logic',
            },
            {
              text: 'Compilation Rules',
              link: '/guide/rule',
            },
            // ! 暂时不暴露api需要考虑编译器兼容
            // {
            //   text: 'API',
            //   link: '/guide/api',
            // },
            {
              text: 'Store',
              link: '/guide/store',
            },
            {
              text: 'Custom Renderer',
              link: '/guide/render',
            },
          ]
        },
        {
          text: 'Appendix',
          items: [
            {
              text: 'Query Manual',
              link: '/guide/quick',
            },
            {
              text: 'Libs',
              link: '/guide/libs',
            },
          ]
        },
      ],
      '/ecosystem/': [
        {
          text: 'Ecosystem',
          items: [
            {
              text: 'Plugins',
              link: '/ecosystem/plugin',
            },
            {
              text: 'Web Compiler',
              link: '/ecosystem/web-compiler',
            },
            {
              text: 'Alins Standalone',
              link: '/ecosystem/standalone',
            },
            {
              text: 'Libs',
              link: '/ecosystem/lib',
            },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/alinsjs/alins' }
    ],
    footer: {
      message: 'Alins 2022-present',
      copyright: '@github/alinsjs',
    }
  }
})
