<template>
  <div class=" col-span-12 flex gap-2 items-center">
    <nuxt-link to="/" class="text-[#212121]/50">Главная</nuxt-link>
    <img src="~/assets/img/icons/right-one.svg" alt="" />
    <span v-if="title" class="text-[#4F4F4F]">{{ title }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    default: null
  }
}
</script>

<style></style>
