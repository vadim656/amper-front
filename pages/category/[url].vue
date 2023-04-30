<script setup>
import { PRODUCTS_ALL } from '~/gql/query/category/PRODUCTS_ALL.js'

const done = ref(false)

const route = useRoute()

//  sort
const selectedPrice = ref({ val: 'Сначала дешевле' })

const optionsPrice = ref([
  'Сначала дешевле',
  'Сначала дороже',
  'Сначала популярные',
  'По наличию'
])

const selectSort = computed(() => {
  if (selectedPrice.value.val == 'Сначала дешевле') {
    return 'Price:asc'
  } else if (selectedPrice.value.val == 'Сначала дороже') {
    return 'Price:desc'
  } else if (selectedPrice.value.val == 'Сначала популярные') {
    return ''
  } else if (selectedPrice.value.val == 'По наличию') {
    return [
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
  }
})

//pagination

let pageCount = reactive({ val: 1 })
let pageSize = reactive({ val: 10 })

const pageCountValue = computed(() => {
  return pageCount.val
})
const pageSizeValue = computed(() => {
  return pageSize.val
})

//  productType
const productType = reactive({ val: 'grid' })

//fetch data

let variables = ref({
  URL: route.params.url,
  PAGE: pageCountValue,
  PAGESIZE: pageSizeValue,
  SORT: selectSort
})

// watchEffect(route.params.url, () => {
//   variables.URL = route.params.url
// })

const { data: dataProducts } = await useAsyncQuery(PRODUCTS_ALL, () => {
  variables.value
})

//  pagination

const pagePlus = () => {
  pageCount.val = pageCount.val + 1
}

const pageMinus = () => {
  pageCount.val = pageCount.val - 1
}

const allPages = computed(() => {
  return dataProducts.value.products.meta.pagination.pageCount
})

const selectPage = computed(() => {
  const allPagesVal = dataProducts.value.products.meta.pagination.pageCount
  const pages = []

  for (var i = 0; i < allPagesVal; i++) {
    pages.push(i)
  }

  if (pageCountValue.value == allPagesVal) {
    const perVisible = pages.slice(
      pageCountValue.value - 5,
      pageCountValue.value
    )
    return perVisible
  } else {
    const perVisible2 = pages.slice(
      pageCountValue.value,
      pageCountValue.value + 5
    )
    return perVisible2
  }
})

onMounted(() => {
  setTimeout(() => {
    done.value = true
  }, 500)
})
</script>
<template>
  <Transition name="fade">
    <div class="container grid grid-cols-12 gap-4" v-if="done == false">
      <Skeleton
        animation="wave"
        width="100%"
        height="100%"
        class="col-span-2 min-h-screen"
      ></Skeleton>
      <Skeleton
        animation="wave"
        width="100%"
        height="100%"
        class="col-span-10 min-h-screen"
      ></Skeleton>
    </div>
    <div class="container grid grid-cols-12 gap-4" v-else>
      <UITheBreadcams
        :title="
          dataProducts.products.data[0].attributes.kategorii_tovarovs.data[0]
            .attributes.Name
        "
      />
      <div class="col-span-2 flex justify-between items-center">
        <h1 class="font-bold text-2xl">
          {{
            dataProducts.products.data[0].attributes.kategorii_tovarovs.data[0]
              .attributes.Name
          }}
        </h1>
      </div>
      <div class="col-span-10 flex justify-between items-center">
        <div class="flex gap-6 items-center w-full justify-between">
          <div class="flex gap-2 items-center">
            <Dropdown
              v-model="selectedPrice.val"
              :options="optionsPrice"
              optionLabel=""
              placeholder="Select a City"
              class="w-full text-sm"
            />
          </div>
          <div class="flex gap-6">
            <div class="flex items-center gap-3">
              <span class="text-sm"> Показать по</span>
              <div class="flex items-center gap-3">
                <span
                  @click="pageSize.val = 10"
                  :class="[
                    pageSize.val == 10
                      ? 'border-red text-red'
                      : 'border-neutral-big/50 text-neutral-big/50'
                  ]"
                  class="border-2 rounded-md cursor-pointer text-sm w-10 h-10 flex justify-center items-center"
                  >10</span
                >
                <span
                  @click="pageSize.val = 20"
                  :class="[
                    pageSize.val == 20
                      ? 'border-red text-red'
                      : 'border-neutral-big/50 text-neutral-big/50'
                  ]"
                  class="border-2 rounded-md cursor-pointer text-sm w-10 h-10 flex justify-center items-center"
                  >20</span
                >
                <span
                  @click="pageSize.val = 40"
                  :class="[
                    pageSize.val == 40
                      ? 'border-red text-red'
                      : 'border-neutral-big/50 text-neutral-big/50'
                  ]"
                  class="border-2 rounded-md cursor-pointer text-sm w-10 h-10 flex justify-center items-center"
                  >40</span
                >
              </div>
            </div>
            <div class="flex gap-1 items-center">
              <button @click="productType.val = 'list'">
                <img
                  src="~/assets/img/icons/list-active.svg"
                  alt=""
                  v-if="productType.val == 'list'"
                  class="w-11 h-11"
                />
                <img
                  src="~/assets/img/icons/list-diseble.svg"
                  alt=""
                  v-else
                  class="w-11 h-11"
                />
              </button>
              <button @click="productType.val = 'grid'">
                <img
                  src="~/assets/img/icons/grid-active.svg"
                  alt=""
                  v-if="productType.val == 'grid'"
                  class="w-11 h-11"
                />
                <img
                  src="~/assets/img/icons/grid-disable.svg"
                  alt=""
                  v-else
                  class="w-11 h-11"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <CategoryASidebar class="col-span-2" />
      <Transition name="fade" appear mode="out-in">
        <div
          class="col-span-10 grid grid-cols-5 gap-4"
          v-if="productType.val == 'grid'"
        >
          <ProductAProductCat
            v-for="product in dataProducts.products.data"
            :key="product.id"
            :product_data="product"
          />
        </div>
        <div
          class="col-span-10 grid grid-cols-1 gap-4"
          v-else-if="productType.val == 'list'"
        >
          <ProductAProductCatList
            v-for="product in dataProducts.products.data"
            :key="`list-` + product.id"
            :product_data="product"
          />
        </div>
      </Transition>

      <div class="col-span-2"></div>
      <div class="col-span-10 flex justify-center items-center">
        <div class="flex items-center justify-center gap-3">
          <button
            @click="pageMinus"
            class="bg-[#F5F5F5] font-semibold text-[#212121]/70 px-4 py-3 rounded-md"
          >
            Назад
          </button>
          <ul class="flex gap-2 items-end">
            <li
              v-for="pag in selectPage"
              :key="pag"
              @click="pageCount.val = pag"
              class="font-semibold text-white rounded-full flex justify-center items-center w-10 h-10 cursor-pointer"
              :class="[pageCount.val == pag ? 'bg-red/70' : 'bg-red/20']"
            >
              {{ pag }}
            </li>
            <li v-if="allPages !== pageCount.val">.....</li>
            <li
              @click="pageCount.val = allPages"
              class="font-semibold text-white rounded-full flex justify-center items-center w-10 h-10 cursor-pointer"
              :class="[pageCount.val == allPages ? 'bg-red/70' : 'bg-red/20']"
            >
              {{ allPages }}
            </li>
          </ul>
          <button
            @click="pagePlus"
            class="bg-[#F5F5F5] font-semibold text-[#212121]/70 px-4 py-3 rounded-md"
          >
            Дальше
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
