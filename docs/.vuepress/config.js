let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Zilkroad Docs'
let description = 'Zilliqa NFT Marketplace Documentation'
let color = '#ffffff'
let author = 'Zilkroad'
let url = `docs.zilkroad.io`
let image =  `/zilkroad-banner.png`
let favi = '/zilkroad-logo.png'


module.exports = {
  theme: 'antdocs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Zilkroad Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: `Zilliqa NFT Marketplace Documentation`,

  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Zilkroad Docs',
      description: `Zilliqa NFT Marketplace Documentation`,
    },
    '/lang/zh/': {
      lang: 'zh-CN',
      title: 'Zilkroad Docs',
      description: `Zilliqa NFT Marketplace Documentation 驱动的静态网站生成器`
    }
  },

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   * 
   */
  head: [
    ['link', { rel: 'icon', href: favi }],
    // https://gist.github.com/MartinMuzatko/cc86b3f168630c05978d65c36169b129 
    ['meta', { name: 'theme-color', content: color }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: title }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:url', content: url }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: image }],
    ['meta', { prefix: ogprefix, property: 'og:article:author', content: author }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/assets/apple-touch-icon.png` }],
    ['link', { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: color }],
    ['meta', { name: 'msapplication-TileImage', content: image}],
    ['meta', { name: 'msapplication-TileColor', content: color }],
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
    sidebarDepth: 1,
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
          { text: 'Zilkroad', link: 'https://zilkroad.io' , ariaLabel: 'Nested' },
          { text: 'Discord', link: 'https://discord.gg/qK2CsMuAQy' , ariaLabel: 'Nested' }
        ],
        sidebar: [
          {
            title: 'Welcome',   
            path: '/',      
            sidebarDepth: 1,    
            children: [
              `/`,
              `/faq`
            ]
          },
          {
            title: 'Features',   
            path: '/features/',      
            sidebarDepth: 1,    
            children: [
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
            title: 'Creator Guide',   
            path: '/creator-guide/',      
            sidebarDepth: 1,    
            children: [
              `/creator-guide/base-uri`,
              `/creator-guide/token-uri`,
              `/creator-guide/project-level-metadata`,
            ]
          },
          {
            title: 'Buyer/Seller Guide',   
            path: '/buyer-seller-guide/',      
            sidebarDepth: 1,    
            children: [
              `/buyer-seller-guide/`,
            ]
          },
          {
            title: 'Ecosystem Guide',   
            path: '/ecosystem-guide/',      
            sidebarDepth: 1,    
            children: [
              `/ecosystem-guide/`,
            ]
          },
        ]
      },

      /* MULTI LANG SITE CONSTANTS */
      '/lang/zh/': {
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
        algolia: {
          apiKey: '54f044bd245de2fdb68c4160e954e2a8',
          indexName: 'testnet-zilkroad',
          appId: 'O8DLGV1DG9',
        },
        sidebar: {
          '/lang/zh/': [/* ... */]
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
