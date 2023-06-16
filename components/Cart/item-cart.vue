<template>
  <div
    class="grid grid-cols-7 items-center gap-2 bg-white p-3 border-b-[1px] border-[#212121]/20 text-sm"
  >
    <div class="col-span-1 ">
      <!-- <img
      class="w-16 h-auto"
        :src="
          $config.api +
            data.attributes.Img.data[0].attributes.url.replace(
              '/',
              ''
            )
        "
        alt=""
      /> -->
    </div>

    <span class="col-span-2">{{ data.attributes.Name }}</span>
    <span class="col-span-1 font-bold"
      >{{ data.attributes.Price.toLocaleString('ru-RU') }} ₽</span
    >
    <div class="col-span-1"></div>
    <span class="col-span-1 font-bold"
      >{{ summItem.toLocaleString('ru-RU') }} ₽</span
    >
    <button class="col-span-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  computed: {
    summItem () {
      //       let result = this.data.reduce((prev, item) => {
      //     return prev + parseInt(item.attributes.Price)
      //   }, 0)
      //   return result
      return this.data.attributes.Price
    }
  }
}
</script>

<style></style>
