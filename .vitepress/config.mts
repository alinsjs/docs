/*
 * @Author: chenzhongsheng
 * @Date: 2023-08-10 00:53:27
 * @Description: Coding something
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

const isProd = true;

export default defineConfig({
  title: "Alins Docs",
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
      // 'script', { src: },
      'script', { 
        src: isProd ? 'https://cdn.jsdelivr.net/npm/alins-compiler-web'
          : `/alins-compiler-web.iife.min.js`
      },
    ],
    ['link', { rel: 'stylesheet', href: isProd 
      ? 'https://cdn.jsdelivr.net/gh/theajack/easy-icon/dist/easy-icon.css'
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
      { text: 'API', link: '/api/' },
      { text: 'Ecosystem', link: '/ecosystem/plugin' },
      { text: 'Playground', link: 'https://alinsjs.github.io/playground' },
      { text: 'Github', link: 'https://github.com/alinsjs/alins' },
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
          ]
        }
      ],
      '/api/': [
        {
          text: 'API',
          items: [
            {
              text: 'Overview',
              link: '/api/index',
            },
          ]
        }
      ],
      '/ecosystem/': [
        {
          text: 'Ecosystem',
          items: [
            {
              text: 'Plugins',
              link: '/ecosystem/plugin',
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
