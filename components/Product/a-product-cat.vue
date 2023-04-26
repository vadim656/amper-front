<script>
import { useCart } from '@/store'
export default {
  props: {
    product_data: {
      type: Object
    }
  },
  setup () {
    const cart = useCart()
    const runtimeConfig = useRuntimeConfig()
    const router = useRouter()
    function goToProduct (params) {
      console.log('push product', params.attributes.kategorii_tovarovs.data[0].attributes.URL)
      router.push({ path: '/category/product-' + params.attributes.kategorii_tovarovs.data[0].attributes.URL + '/' + params.id})
    }
    return { cart, goToProduct, runtimeConfig }
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
<template>
  <div
    class="bg-white hover:shadow-xl anime flex flex-col justify-between items-center rounded-md border-[1px] border-white hover:border-neutral-big/50 p-4 gap-4"
  >
    <div class="flex flex-col gap-2">
      <div>
        <img
          v-if="product_data.attributes.Img.data.length > 0"
          :src="
            runtimeConfig.public.apiNot +
            product_data.attributes.Img.data[0].attributes.url
          "
          alt=""
          class="rounded-md w-full h-[160px] object-contain"
        />
        <img
          v-else
          src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          alt=""
          class="rounded-md w-full h-[160px] object-contain"
        />
      </div>
      <span @click="goToProduct(product_data)">
        <h3
          class="w-full text-center text-sm font-bold giveMeEllipsis cursor-pointer"
        >
          {{ product_data.attributes.Name }}
        </h3>
      </span>
    </div>
    <div class="flex justify-start w-full">
      <ul class="text-xs">
        <li class="flex justify-between gap-2">
          <span
            v-if="orderStars.valData.length !== 0"
            class="flex justify-between gap-2 w-full"
          >
            <span
              >Наличие в магазинах:
              <b> {{ orderStars.valData.length }} </b></span
            >
          </span>
          <span v-else class="opacity-50">Нет в наличии</span>
        </li>
        <li class="flex justify-between gap-2">
          <span
            >Производитель:
            <b v-if="product_data.attributes.Proizvoditel.length">{{
              product_data.attributes.Proizvoditel
            }}</b>
            <b v-else>Не указано</b>
          </span>
        </li>
      </ul>
    </div>

    <div class="flex justify-between items-center w-full">
      <span class="text-base font-bold">
        {{ product_data.attributes.Price.toLocaleString('ru-RU') }} ₽</span
      >
      <button
        v-if="orderStars.valData.length !== 0"
        @click="cart.AddCartItem(product_data)"
        class="flex justify-center items-center bg-red/70 px-8 py-3 rounded-md cursor-pointer"
      >
        <img src="~/assets/img/icons/cartAdd.svg" alt="" />
      </button>
      <div
        v-else
        class="flex justify-center items-center bg-red/30 px-8 py-3 rounded-md"
      >
        <img src="~/assets/img/icons/cartAdd.svg" alt="" />
      </div>
    </div>
  </div>
</template>



<style>
.giveMeEllipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-height: 1; /* fallback */
  max-height: 1 * 2; /* fallback */
}
</style>
