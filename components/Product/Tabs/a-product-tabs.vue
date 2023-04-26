<template>
  <div class="flex flex-col gap-8">
    <div
      class="flex w-full gap-4 items-center justify-center text-xl font-bold"
    >
      <button
        @click="tab = 1"
        :class="[tab == 1 ? 'text-red/70' : 'text-neutral-big']"
        class=""
      >
        Описание
      </button>
      <button
        @click="tab = 2"
        :class="[tab == 2 ? 'text-red/70' : 'text-neutral-big']"
        class=""
      >
        Характеристики
      </button>
      <button
        @click="tab = 3"
        :class="[tab == 3 ? 'text-red/70' : 'text-neutral-big']"
        class=""
      >
        Отзывы
      </button>
    </div>
    <Transition name="fade" tag="div">
      <div v-if="tab == 1" v-html="product.Descriptoin"></div>
      <div v-else-if="tab == 2">
      <ProductTabsACharacteristic :data="product"/>
      </div>
      <div v-else-if="tab == 3">Отзывы</div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  },
  data () {
    return {
      tab: 1
    }
  }
}
</script>

<style></style>
