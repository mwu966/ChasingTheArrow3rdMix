require('dotenv').config()
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Chasing the Arrow -Dance Dance Revolution 譜面紹介合同 3rdMix- 特設サイト',
    htmlAttrs: {
      class: 'has-navbar-fixed-top'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary'},
      { hid: 'twitter:site', name: 'twitter:site', content: '@ColloidGel' },
      { hid: 'og:type', property: 'og:type', content: 'website'},
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Chasing the Arrow -Dance Dance Revolution 譜面紹介合同 3rdMix- 特設サイト'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'http://ddr.coterie.work/3rdMix'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'C97で初頒布するDDR譜面紹介合同｢Chasing the Arrow｣の特設サイトです'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://ddr.coterie.work/3rdMix/coverC97.png'
      },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Chasing the Arrow -Dance Dance Revolution 譜面紹介合同 3rdMix- 特設サイト'}
    
    ],
    script: [
      {
        charset: 'utf-8',
        src:
          'https://cdn.polyfill.io/v2/polyfill.min.js?features=IntersectionObserver,IntersectionObserverEntry'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
    /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/vue-scrollto', '~plugins/vue2-touch-events', '~plugins/observe-visibility'],
  /*
   ** Nuxt.js build-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    'nuxt-webfontloader',
    '@nuxtjs/dotenv',
    ['@nuxtjs/google-analytics', {
      id: 'UA-35724380-1'
    }]
  ],
  axios: {
  },
  webfontloader: {
    google: {
      families: ['Gentium+Book+Basic','Sawarabi+Gothic']
    }
  },
  router: {
    base: '/ChasingTheArrow3rdMix/'
  },
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/static/',
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
