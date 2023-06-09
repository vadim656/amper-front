// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
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
    '~/assets/css/main.css',
    'primevue/resources/themes/tailwind-light/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
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
    '@nuxtjs/strapi',
    'dayjs-nuxt'
  ],
  dayjs: {
    locales: ['ru'],
    plugins: ['relativeTime', 'utc', 'timezone'],
    defaultLocale: 'ru',
    defaultTimezone: 'Russia/Moscow'
  },
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
  }
})
