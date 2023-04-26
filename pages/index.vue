<template>
  <div class="flex flex-col gap-20">
    <MainASlider />
    <MainACategory :category="data.categories.data" />
    <MainABrends :marka="data.markaAutos.data" />
    <MainACatalog :catalog="data.brandsAutos.data" />
  </div>
</template>
<script setup>
import MARKA_ALL from '~/gql/query/main/MARKA_ALL.gql'
const { data } = await useAsyncQuery(MARKA_ALL)
</script>
