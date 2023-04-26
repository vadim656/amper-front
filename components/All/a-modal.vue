<template>
  <div class="flex justify-center items-center relative">
    <div
      class="w-screen h-screen bg-[#343434]/30 fixed top-0 left-0 right-0 bottom-0 z-[9999]"
    ></div>
    <div
      ref="modal"
      class="bg-white flex justify-center items-center w-full max-w-[600px] h-auto px-4 py-8 rounded-md relative absolute z-[99999]"
    >
      <button @click="$emit('closeModal')" class="absolute top-2 right-2">
        Закрыть
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
const emit = defineEmits(['closeModal'])

const modal = ref(null)



onClickOutside(modal, (event) => emit('closeModal'))

</script>

<style></style>
