<template>
  <div class="flex gap-2 border-b-[1px] border-neutral-big/50 py-3">
    <div class="flex items-center justify-between gap-2 w-full">
      <img
        v-if="data.attributes.Img.data.length == 0"
        :src="$config.public.noPhoto"
        alt=""
        class="w-full max-w-[80px] h-auto object-cover"
      />
      <img
        v-else
        :src="
          $config.public.apiNot + data.attributes.Img.data[0].attributes.url
        "
        alt=""
        class="w-full max-w-[80px] h-auto object-cover"
      />
      <span class="text-xs cursor-pointer font-semibold">{{
        data.attributes.Name
      }}</span>
      <button class="pl-4">
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
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style></style>
