export default {
  server: {
    host: '0.0.0.0', // default: localhost
  },
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Watcher Setting to get Hot Reloading in Containerized Docker
   */
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    css: [],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['plugins/filters'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo',
    'nuxt-gsap',
  ],
  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: 'http://api:3001/api',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        httpLinkOptions: {
          credentials: 'same-origin',
        },
      },
    },
    /*
     ** Nuxt.js modules
     */

    modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {},
      vendor: ['axios'],
    },
  },
}
