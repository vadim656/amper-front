<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="!loading" class="flex flex-col gap-20">
    <MainASlider />
    <!-- <MainACategory :category="data.categories.data" /> -->
    <MainABrends :marka="data.markaAutos.data" />
    <MainACatalog :catalog="data.brandsAutos.data" />
  </div>
</template>
<script setup>

import {MARKA_ALL} from '~/gql/query/main/MARKA_ALL.js'
const { data, loading  } = await useAsyncQuery(MARKA_ALL)
</script>
