<script setup>
const props = defineProps(['data'])
</script>
<template>
  <div class="flex flex-col divide-y divide-neutral-big divide-dotted">
    <div class="ch-row">
      <span>Страна производитель</span>
      <span class="font-semibold"> {{ data.StranaProishog }} 1</span>
    </div>
    <div class="ch-row">
      <span>Марка</span>
      <span class="font-semibold"> {{ data.MarkaBrend }} 2</span>
    </div>
    <div class="ch-row">
      <span>Емкость</span>
      <span class="font-semibold"> {{ data.EmkostAkb }} 3</span>
    </div>
    <div class="ch-row">
      <span>Полярность</span>
      <span class="font-semibold"> {{ data.Polyarnost }} 4</span>
    </div>
  </div>
</template>
<style scoped>
.ch-row {
    @apply flex w-full justify-between items-center py-2;
}
</style>
