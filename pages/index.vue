<template>
  <div v-if="loading">Loading...</div>
  <div
    v-else-if="!loading && resMainData !== null"
    class="flex flex-col gap-20"
  >
    <MainASlider />
    <MainACategory :category="resMainData.categories.data" />
    <MainABrends :marka="resMainData.markaAutos.data" />
    <MainACatalog :catalog="resMainData.brandsAutos.data" />
  </div>
</template>
<script setup>
import { MARKA_ALL } from '~/gql/query/main/MARKA_ALL'
const { data: resMain, loading } = await useAsyncQuery(MARKA_ALL)

const resMainData = computed(() => {
  if (resMain.value?.categories.data) {
    return resMain.value
  }
  return null
})
</script>
