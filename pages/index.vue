<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="result" class="flex flex-col gap-20">
    <MainASlider />
    <MainACategory :category="result.categories.data" />
    <MainABrends :marka="result.markaAutos.data" />
    <MainACatalog :catalog="result.brandsAutos.data" />
  </div>
</template>
<script setup>

import {MARKA_ALL} from '~/gql/query/main/MARKA_ALL.js'
const { result, loading  } = useQuery(MARKA_ALL)
</script>
