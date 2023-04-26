<script setup>
import { useCart } from '@/store'
import PRODUCT_ID from '~/gql/query/PRODUCT_ID.gql'
import PRODUCTS_ALL from '~/gql/query/category/PRODUCTS_ALL.gql'
import { useToastStore } from '@/store'
const toastAdd = useToastStore()
const route = useRoute()

const cart = useCart()

function addCart (data) {
  cart.AddCartItem(data)
  toastAdd.AddToast(data.id)
}

let variables = ref({
  ID: route.params.id
})

let variables2 = ref({
  URL: route.params.cat,
  PAGE: 1,
  PAGESIZE: 6,
  SORT: [
    'Stock1:desc',
    'Stock2:desc',
    'Stock3:desc',
    'Stock4:desc',
    'Stock5:desc',
    'Stock6:desc',
    'Stock7:desc',
    'Stock8:desc',
    'Stock9:desc',
    'Stock10:desc',
    'Stock11:desc',
    'Stock12:desc'
  ]
})

const { result: product } = useQuery(PRODUCT_ID, variables.value)

const productID = computed(() => {
  if (product.value?.product) {
    return product.value.product.data
  } else {
    return null
  }
})

const { result: products } = useQuery(PRODUCTS_ALL, variables2.value)

const productsID = computed(() => {
  if (products.value?.products) {
    return products.value.products.data
  } else {
    return null
  }
})
</script>
<template>
  <div class="container grid grid-cols-12 gap-8" v-if="productID">
    <UITheBreadcams class="col-span-12" title="www" />

    <div class="col-span-12 text-3xl font-bold">
      {{ productID.attributes.Name }}
    </div>
    <section class="col-span-12 grid grid-cols-6 gap-8">
      <div class="col-span-3">
        <img
          v-if="productID.attributes.Img.data.length == 0"
          :src="$config.public.noPhoto"
          alt=""
        />
        <img
          v-else
          :src="
            $config.public.apiNot +
            productID.attributes.Img.data[0].attributes.url
          "
          alt=""
        />
      </div>
      <div class="flex flex-col gap-8 col-span-2">
        <div class="flex flex-col gap-4 bg-white drop-shadow-xl rounded-md p-4">
          <span class="text-sm font-bold">Наличие в магазинах:</span>
          <div class="flex flex-col">
            <ProductAProductsSity
              :address="'Г. Изобильный, ул.Кирова, д.235Б'"
              :stock="productID.attributes.Stock1"
              key="1"
            />
            <ProductAProductsSity
              :address="'г.Михайловск, ул.Гоголя, д. 4'"
              :stock="productID.attributes.Stock2"
              key="2"
            />
            <ProductAProductsSity
              :address="'г.Михайловск, ул.Гоголя, д. 5'"
              :stock="productID.attributes.Stock3"
              key="3"
            />
            <ProductAProductsSity
              :address="'г.Невинномыск, ул.Монтажная,  15д'"
              :stock="productID.attributes.Stock4"
              key="4"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул.Рогожникова 1'"
              :stock="productID.attributes.Stock5"
              key="5"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул.Доваторцев, 179а'"
              :stock="productID.attributes.Stock6"
              key="6"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул. Льва толстого 116'"
              :stock="productID.attributes.Stock7"
              key="7"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул.Макарова 28'"
              :stock="productID.attributes.Stock8"
              key=""
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул.Тухачевского 30/2'"
              :stock="productID.attributes.Stock9"
              key="8"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, ул.Шпаковская, дю 70/1'"
              :stock="productID.attributes.Stock10"
              key="9"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь, Чапаевские проезд 25а'"
              :stock="productID.attributes.Stock11"
              key="10"
            />
            <ProductAProductsSity
              :address="'г.Ставрополь Серова 464/1'"
              :stock="productID.attributes.Stock12"
              key="11"
            />
          </div>

          <button class="font-bold text-red/70">Показать все на карте</button>
        </div>
        <div class="bg-white drop-shadow-xl rounded-md p-4 flex flex-col gap-4">
          <div class="flex justify-between items-center">
            <span class="font-bold text-red/70 text-2xl"
              >{{ productID.attributes.Price }} ₽</span
            >
            <span class="text-[#212121]/50"
              >Код: {{ productID.attributes.Artikul }}</span
            >
          </div>
          <div class="flex justify-between items-center">
            <ButtonsAButtonRed @click-b="addCart(productID)">
              <img src="~/assets/img/icons/cartAdd.svg" alt="" /> В корзину
            </ButtonsAButtonRed>

            <button class="flex justify-center w-full">В один клик</button>
          </div>
        </div>
      </div>
    </section>
    <section
      class="col-span-12 flex flex-col gap-10 justify-center items-center"
    >
      <ProductTabsAProductTabs :product="productID.attributes" />
    </section>
    <section class="col-span-12 flex flex-col gap-8">
      <span class="font-bold text-2xl">Похожие товары</span>
      <div class="grid grid-cols-6 gap-4" v-if="productsID">
        <ProductAProductCat
          v-for="product in productsID"
          :key="product.id"
          :product_data="product"
        />
      </div>
    </section>
    <!-- <section class="col-span-12 flex flex-col gap-8">
      <span class="font-bold text-2xl">Подборки товаров</span>
      <div class="flex flex-wrap  gap-4">
        <nuxt-link
          :to="tag.attributes.UID"
          v-for="tag in tagsproducts.data"
          :key="tag.id"
          class="bg-[#F5F5F5] p-3 rounded-md"
          >{{ tag.attributes.Name }}</nuxt-link
        >
      </div>
    </section> -->
  </div>
</template>

<style></style>
