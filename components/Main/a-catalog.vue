<script setup>
const props = defineProps(['catalog'])
const runtimeConfig = useRuntimeConfig()
const router = useRouter()
const getLink = link => {
  router.push('/brand/' + link)
}
</script>
<template>
  <div class="container flex flex-col gap-8">
    <h4 class="w-full flex justify-start font-bold text-2xl">
      Бренды
    </h4>
    <div class="grid grid-cols-6 gap-4 ">
      <div
        @click="getLink(item.id)"
        v-for="item in catalog"
        :key="item.id"
        class="border-[#343434]/50 border-[1px] p-4 rounded-md flex flex-col justify-center items-center gap-2 anime bg-white hover:drop-shadow-2xl"
      >
        <img
          v-if="item.attributes.IMG.data"
          :src="
          runtimeConfig.public.apiNot + + item.attributes.IMG.data.attributes.url
          "
          alt=""
          class="w-[80px] h-auto"
        />
        <span class="font-semibold">{{ item.attributes.Name }}</span>
      </div>
    </div>
  </div>
</template>


<style></style>
