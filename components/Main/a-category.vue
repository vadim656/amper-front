<script setup>
const props = defineProps(['category'])

const runtimeConfig = useRuntimeConfig()
const router = useRouter()
const getLink = link => {
  router.push('/category/' + link)
}
</script>
<template>
  <div class="container flex flex-col gap-8">
    <h4 class="w-full flex justify-start font-bold text-2xl">
      Каталог по маркам авто
    </h4>

    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div
        @click="getLink(item.attributes.URL)"
        v-for="item in category"
        :key="item.id"
        class="bg-white drop-shadow-xl hover:drop-shadow-2xl anime p-4 flex justify-between items-center rounded-md"
      >
        <img
          v-if="item.attributes.IMG.data"
          :src="
            runtimeConfig.public.apiNot +
            item.attributes.IMG.data.attributes.url
          "
          class="w-auto h-[70px]"
          alt=""
        />
        <img
          v-else
          :src="runtimeConfig.public.noPhoto"
          class="w-auto h-[70px]"
          alt=""
        />
        <h3 class="font-semibold text-base text-right">
          {{ item.attributes.Name }}
        </h3>
      </div>
    </div>
  </div>
</template>
