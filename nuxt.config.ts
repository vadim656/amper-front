// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: 'AMPER',
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
    'primeicons/primeicons.css'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js'
  },

  publicRuntimeConfig: {
    // Keys within public are also exposed client-side

    api: 'https://api.amper-plus.ru/',
    apiNot: 'https://api.amper-plus.ru',
    noPhoto:
      'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
    graphqlURL: 'https://api.amper-plus.ru/graphql',
    strapiURL: 'https://api.amper-plus.ru'
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },
  apollo: {
    autoImports: true,
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
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    '@pinia-plugin-persistedstate/nuxt',
    // 'yandex-metrika-module-nuxt3',
    '@pinia/nuxt'
  ],
  build: {
    transpile: ['primevue', 'ts-invariant/process']
  }
})
