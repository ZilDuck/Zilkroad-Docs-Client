const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器'
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Zilkroad',
        link: 'https://zilkroad.io',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // algolia docsearch options for current locale
        algolia: {},
        nav: [
          { text: 'Zilkroad', link: 'https://zilkroad.io' , ariaLabel: 'Nested' }
        ],
        sidebar: [
          {
            title: 'Welcome',   
            path: '/welcome/',      
            sidebarDepth: 1,    
            children: [
              `/welcome/`,
              `/welcome/faq`
            ]
          },
          {
            title: 'Features',   
            path: '/features/',      
            sidebarDepth: 1,    
            children: [
              `/features/`,
              `/features/adverts`,
              `/features/calendar`,
              `/features/fungible-tokens`,
              `/features/nft-standard`,
              `/features/primary-sales-launchpad`,
              `/features/report`,
              `/features/royalties`,
              `/features/secondary-sales`,
              `/features/user-stats`,
              `/features/verified-collections`,
            ]
          },
          {
            title: 'Buyer/Seller Guide',   
            path: '/buyer-seller-guide/',      
            sidebarDepth: 1,    
            children: [
              `/`,
              `/buyer-seller-guide/buyer-guide`,
              `/buyer-seller-guide/seller-guide`,
            ]
          },
          {
            title: 'Creator Guide',   
            path: '/creator-guide/',      
            sidebarDepth: 1,    
            children: [
              `/`,
              `/creator-guide/base-uri`,
              `/creator-guide/token-uri`,
              `/creator-guide/project-level-metadata`,
            ]
          },
          {
            title: 'Ecosystem Guide',   
            path: '/ecosystem-guide/',      
            sidebarDepth: 1,    
            children: [
              `/`,
              `/ecosystem-guide/intergration`
            ]
          },
        ]
      },

      /* MULTI LANG SITE CONSTANTS */
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '嵌套', link: '/zh/nested/' }
        ],
        algolia: {},
        sidebar: {
          '/zh/': [/* ... */],
          '/zh/nested/': [/* ... */]
        }
      }
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
