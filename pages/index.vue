<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="!loading" class="flex flex-col gap-20">
    <MainASlider />
    <!-- <MainACategory :category="resMain.categories.data" /> -->
    <!-- <MainABrends :marka="resMain.markaAutos.data" /> -->
    <!-- <MainACatalog :catalog="resMain.brandsAutos.data" /> -->
    
  </div>
</template>
<script setup>

import {MARKA_ALL} from '~/gql/query/main/MARKA_ALL'
const { result: resMain, loading  } = useQuery(MARKA_ALL)

</script>
