<template>
  <div
    class="grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-20 h-full min-h-screen bg-[#F9F9F9]"
  >
    <Toast />
    <UITheHeader />

    <slot />
    <UITheFooter />
  </div>
</template>

<script setup>
import { useToastStore } from '@/store'
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const toastAdd = useToastStore()

watch(toastAdd.getToast, () => {
  console.log('someGetter')
  toast.add({
    severity: 'success',
    summary: 'Добавлен в корзину!',
    detail: `Арт : ${toastAdd.getToast}`,
    life: 2000
  })
})
</script>

<style></style>
