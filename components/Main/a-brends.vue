<script setup>
const props = defineProps(['marka'])
</script>
<template>
  <div class="container flex flex-col gap-8">
    <h4 class="w-full flex justify-start font-bold text-2xl">Бренды</h4>
    <div class="grid grid-cols-7 gap-4" v-if="marka">
      <div
        v-for="(item, i) in marka"
        :key="i"
        class="bg-white  hover:drop-shadow-2xl anime p-4 flex justify-center items-center rounded-md"
      >
        <img
          v-if="item.attributes.IMG.data"
          :src="$config.public.apiNot + item.attributes.IMG.data.attributes.url"
          alt=""
          class="w-full max-w-[100px] h-auto"
        />
        <img
          v-else
          src="https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          alt=""
          class="rounded-md w-full h-[160px] object-contain"
        />
      </div>
    </div>
  </div>
</template>
