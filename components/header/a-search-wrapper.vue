<script setup>
import SEARCH from '~/gql/query/SEARCH.gql'


let searchInput = reactive({ text: '' })



const { result, loading, error, refetch } = useQuery(SEARCH, () => ({
  NAME: searchInput.text
}))
const products = computed(() => result.value?.search ?? [])

</script>
<template>
  <div class="relative rounded-md shadow-sm border">
    <input
      type="text"
      v-model="searchInput.text"
      class="block p-2 w-full min-w-[320px] sm:min-w-[600px] border-[#212121]/20 text-red-900 placeholder-red-300 focus:outline-none sm:text-sm rounded-md"
      placeholder="Поиск по сайту"
    />
    <div
      class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
    <div
    v-if="products && products.products && searchInput.text.length >= 3"
      class="absolute top-10 bg-white drop-shadow-md rounded-md z-[99] 4 w-full overflow-hidden"
    >

      <div class="flex flex-col -gap-1">
        <div
          v-for="item in products.products.data "
          :key="item.id"
          class="py-3 border-b border-[#212121]/30 flex cursor-pointer justify-between gap-4 w-full hover:bg-[#212121]/10 anime p-4"
        >
          <span class="text-left text-xs truncate w-1/6">
            Арт. {{ item.attributes.Artikul }}
          </span>
          <span class="text-left truncate w-4/6">
            {{ item.attributes.Name }}
          </span>
          <span class="font-bold w-1/6 text-right"
            >{{ item.attributes.Price }} ₽</span
          >
        </div>
        <button
          class="p-4 font-semibold bg-red/70 hover:bg-red/90 anime text-white"
        >
          Показать все товары
        </button>
      </div>
    </div>
  </div>
</template>
