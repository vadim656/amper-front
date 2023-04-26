<template>
  <button
    @click="$emit('click-b')"
    class="flex w-full justify-center items-center bg-red/70 hover:bg-red/50 anime px-8 py-3 text-white gap-2 rounded-md"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {}
</script>

<style></style>
