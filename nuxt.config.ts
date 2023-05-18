// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      port: 3000,
      https: true,
      hmr: {
        protocol: 'wss'
      }
    }
  },
  content: {
    base: '/_content',
    watch: false
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'AMPER +',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap'
        }
      ]
    }
  },
  css: [
    'primevue/resources/themes/tailwind-light/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '~/assets/css/main.css'
  ],
  runtimeConfig: {
    public: {
      api: 'https://api.amper-plus.ru/',
      apiNot: 'https://api.amper-plus.ru',
      noPhoto:
        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
      graphqlURL: 'https://api.amper-plus.ru/graphql',
      strapiURL: 'https://api.amper-plus.ru'
    }
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/strapi'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  strapi: {
    url: 'https://api.amper-plus.ru',
    prefix: '/api',
    version: 'v4',
    cookie: {
      sameSite: 'strict'
    },
    cookieName: 'strapi_jwt'
  },
  apollo: {
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: 'https://api.amper-plus.ru/graphql',
        httpLinkOptions: {
          credentials: 'include'
        }
      }
    }
  },
  build: {
    transpile: ['primevue']
  },
  hooks: {
    'vite:extendConfig' (config, { isClient }) {
      console.log(
        isClient ? 'client' : 'server',
        'config hmr:',
        config.server.hmr
      )
    }
  }
})
