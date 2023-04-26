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
    cssPath: '~/assets/css/tailwind.css'
  },

  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      api: process.env.STRAPI,
      apiNot: process.env.STRAPI_URL,
      noPhoto:
        'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg',
      graphqlURL: process.env.STRAPI_GRAPGHQL,
      strapiURL: process.env.STRAPI_URL
    }
  },
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
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
    transpile: ['primevue', '@apollo/client', 'ts-invariant/process']
  }
})
