<template>
  <div
    class="bg-white hover:shadow-xl  anime  flex  justify-between items-center rounded-md border-[1px] border-white hover:border-neutral-600/50 p-4 gap-4"
  >
    <div class="w-2/6 flex items-center gap-2">
      <img
        v-if="product_data.attributes.Img.data.length"
        :src="
          runtimeConfig.public.apiNot + product_data.attributes.Img.data[0].attributes.url
        "
        alt=""
        class="rounded-md w-full h-[300px] object-contain opacity-0"
        
      />
      <img
        v-else
        src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        alt=""
        class="rounded-md w-full h-[300px] object-contain"
        
      />
    </div>
    <div class="w-2/6 flex items-center">
      <nuxt-link :to="`/category/product/${product_data.id}`" class="">
        <h3
          class="w-full text-left text-sm sm:text-base font-bold  cursor-pointer"
        >
          {{ product_data.attributes.Name }}
        </h3>
      </nuxt-link>
    </div>
    <div class="w-1/6 flex justify-start">
      <ul class="text-xs flex flex-col gap-1">
        <li class="flex justify-between gap-2">
          <span
            >Производитель:
            <b v-if="product_data.attributes.Proizvoditel.length">{{ product_data.attributes.Proizvoditel }}</b>
            <b v-else>Не указано</b>
          </span>
        </li>
        <li class="flex justify-between gap-2">
          <span
            >Габариты:
            <b v-if="product_data.attributes.DostavkaHeight > 0">{{ product_data.attributes.DostavkaHeight }} Х {{ product_data.attributes.DostavkaLength }} Х {{ product_data.attributes.DostavkaWidth }}</b>
            <b v-else>Не указано</b>
          </span>
        </li>
        <li class="flex justify-between gap-2">
          <span
            >Полярность:
            <b v-if="product_data.attributes.Polyarnost.length">{{ product_data.attributes.Polyarnost }}</b>
            <b v-else>Не указано</b>
          </span>
        </li>
        <li class="flex justify-between gap-2">
          <span
            >Емкость:
            <b v-if="product_data.attributes.EmkostAkb.length">{{ product_data.attributes.EmkostAkb }}</b>
            <b v-else>Не указано</b>
          </span>
        </li>
      </ul>
    </div>

    <div class="w-1/6 flex flex-col gap-3 justify-between items-end">
      <span class="text-base font-bold">
        {{ product_data.attributes.Price.toLocaleString('ru-RU') }} ₽</span
      >
      <button
        v-if="orderStars.valData.length !== 0"
        @click="cart.AddCartItem(product_data)"
        class="flex justify-center items-center gap-2 bg-red-700/70 px-8 py-3 rounded-md cursor-pointer"
      >
        <img src="~/assets/img/icons/cartAdd.svg" alt="" />
        <span class="text-white">В корзину </span>
      </button>
      <div
        v-else
        class="flex justify-center items-center gap-2 bg-red-700/30  px-8 py-3 rounded-md"
      >
        <span class="text-white">Нет в наличии</span>
      </div>
      <li
        v-if="orderStars.valData.length !== 0"
        class="flex justify-between gap-2 w-full text-sm"
      >
        <span
          >Наличие в магазинах: <b> {{ orderStars.valData.length }} </b></span
        >
      </li>
    </div>
  </div>
</template>

<script>
import { useCart } from '@/store'
export default {
  props: {
    product_data: {
      type: Object
    }
  },
  setup () {
    const runtimeConfig = useRuntimeConfig()
    const cart = useCart()
    return { cart, runtimeConfig }
  },
  methods: {
    addToCart (product) {
      console.log(product)
    }
  },
  computed: {
    orderStars () {
      let list = []
      const data2 = this.product_data.attributes
      for (var key in data2) {
        if (key.includes('Stock')) {
          list.push(data2[key])
        }
      }
      const valData = list.filter(x => x > 0)
      const sumWithInitial = list.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      )
      return { list, sumWithInitial, valData }
    }
  }
}
</script>

<style></style>
