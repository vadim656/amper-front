<template>
  <div
    class="grid grid-cols-1 grid-rows-[auto,1fr,auto] gap-20 h-full min-h-screen bg-[#F9F9F9]"
  >
    <UITheHeader />
    <div class="container grid grid-cols-12 gap-4">
      <LKSibeBar class="col-span-2" />
      <div class="col-span-10">
        <slot />
      </div>
    </div>

    <UITheFooter />
  </div>
</template>

<script setup>

</script>

<style></style>
