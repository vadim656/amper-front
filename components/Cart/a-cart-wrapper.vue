<script setup>
import aProductCart from '../Product/a-product-cart.vue'
const router = useRouter()

const props = defineProps(['cart'])

const summPriceCart = computed(() => {
  let result = props.cart.getCart.reduce((prev, item) => {
    return prev + parseInt(item.attributes.Price)
  }, 0)
  return result
})

const emit = defineEmits(['closeCart'])

function getLink () {
  router.push('/cart')
  emit('closeCart')
}
</script>

<template>
  <div
    class="absolute bg-white drop-shadow-xl rounded-md w-full max-w-[400px] top-14 right-0 z-[2]"
  >
    <div class="z-[3] p-4 flex flex-col gap-2">
      <div class="w-full justify-end text-right text-sm">Очистить список</div>
      <a-product-cart
        v-for="item in cart.getCart"
        :key="item.id"
        :data="item"
      />
      <div class="w-full flex items-center justify-between pt-3">
        <span>Итого: {{ summPriceCart | price }} ₽</span>
        <button @click="getLink"
          class="flex justify-center items-center bg-red/70 px-8 py-3 rounded-md text-white"
        >
          Оформить заказ
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
