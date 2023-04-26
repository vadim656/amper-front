<template>
  <div class="p-3 border-[1px] border-[#E5E5E5]">
    <div class="flex justify-between items-center text-sm">
      <span>{{ address }}</span>
      <span class="font-bold">{{ stock }} шт</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    address: String,
    stock: Number
  }
}
</script>

<style></style>
