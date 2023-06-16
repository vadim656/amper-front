<script setup>
import { useSity, useCart } from '@/store'
import { onClickOutside } from '@vueuse/core'
import AModal from '../All/a-modal.vue'
import ACartWrapper from '../Cart/a-cart-wrapper.vue'
import { SITY_ALL } from '~/gql/query/SITY_ALL.js'
import { CATS_ALL } from '~/gql/query/CATS_ALL.js'

const router = useRouter()
// const { onLogout } = useApollo()

const { result: sities } = useQuery(SITY_ALL)
const { result: categories, loading: catLoad } = useQuery(CATS_ALL)

const categoriesCom = computed(() => {
  if (catLoad.value ?? categories.value?.categories) {
    return categories.value.categories
  }
  return null
})

const sity = useSity()
const cart = useCart()

const modalCart = ref(false)

const catalog = ref(null)
const catalogView = ref(false)

onClickOutside(catalog, event => (catalogView.value = false))

let modalSity = ref(false)

const setSityHandler = item => {
  sity.SetSityData(item)
  setTimeout(() => {
    modalSity.value = false
  }, 100)
}

const close = () => {
  modalSity.value = false
}

function linkCatalog (id) {
  const path = '/category/' + id
  router.push({
    path: path
  })
  catalogView.value = false
}

const cartView = ref(null)

onClickOutside(cartView, event => (modalCart.value = false))

const closeCartEmit = () => {
  modalCart.value = false
}

function logout () {
  // onLogout()
  router.push('/auth/login')
}
</script>
<template>
  <div class="flex flex-col">
    <div class="bg-[#EAEAEA]">
      <div class="container flex justify-between items-center h-10">
        <div @click="modalSity = true" class="cursor-pointer">
          {{ sity.getSityName }}
        </div>
        <div class="flex gap-8">
          <div class="flex gap-4">
            <nuxt-link to="/">Корпоративным клиентам</nuxt-link>
            <nuxt-link to="/">Вакансии</nuxt-link>
          </div>
          <div class="flex gap-4">
            <Nuxt-link to="/auth/login">Войти</Nuxt-link>
            <button>Регистрация</button>
            <span>user</span>
            <button @click="logout">Выйти</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between items-center container py-4 relative">
      <div class="flex gap-4 items-center">
        <nuxt-link to="/">LOGO</nuxt-link>
      </div>
      <div class="flex gap-4 items-center">
        <nuxt-link class="font-bold text-red/70" to="/"
          >Указать автомобиль</nuxt-link
        >
        <nuxt-link class="font-bold" to="/">Связаться с нами</nuxt-link>
        <button class="flex gap-2 items-center">
          <span>Избранное</span>
          <img src="~/assets/img/icons/izbrannoe.svg" alt="" />
          <span>0</span>
        </button>
        <button @click="modalCart = !modalCart" class="flex gap-2 items-center">
          <span>Корзина </span>
          <img src="~/assets/img/icons/cart.svg" alt="" />
          <span>{{ cart.getCart.length }}</span>
        </button>
      </div>
      <!-- modal cart -->
      <a-cart-wrapper
        ref="cartView"
        v-if="modalCart == true && cart.getCart.length"
        :cart="cart"
        @closeCart="closeCartEmit"
      />

      <!-- modal cart end-->
    </div>
    <div class="bg-[#EAEAEA]">
      <div class="container flex justify-start gap-4 items-center">
        <div class="relative">
          <button
            @click="catalogView = !catalogView"
            class="flex gap-2 items-center justify-center px-14 py-4 bg-red/70"
          >
            <img src="~/assets/img/icons/catalog.svg" alt="" />
            <span class="text-white font-bold">Каталог</span>
          </button>
          <!-- <pre>{{ categoriesCom }}</pre> -->
          <div
            ref="catalog"
            v-if="catalogView == true"
            class="absolute top-14 bg-white drop-shadow-md rounded-md z-[99] p-4 w-full overflow-hidden"
          >
            <!-- <div class="flex flex-col gap-4" v-if="!catLoad && categoriesCom">
              <div
                v-for="item in categoriesCom"
                :key="item.id"
                class="cursor-pointer"
              >
                <span @click="linkCatalog(item.attributes.URL)">{{
                  item.attributes.Name
                }}</span>
              </div>
            </div> -->
          </div>
        </div>
        <HeaderASearchWrapper />

        <nuxt-link to="/">Подбор АКБ</nuxt-link>
        <nuxt-link to="/">Подбор по авто</nuxt-link>
      </div>
    </div>
    <!-- modal sity -->
    <a-modal v-if="modalSity == true" @closeModal="close">
      <div>
        <ul class="flex flex-wrap gap-4" v-if="sities">
          <li
            v-for="item in sities.sities.data"
            :key="item.id"
            @click="setSityHandler(item)"
            class="cursor-pointer border px-4 py-3"
          >
            {{ item.attributes.Name }}
          </li>
        </ul>
      </div>
    </a-modal>
  </div>
</template>

<style></style>
