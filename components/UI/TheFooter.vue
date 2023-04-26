<template>
  <div class="bg-[#E5E5E5]">
    <div class="container py-4 flex justify-between">
      <div class="flex gap-20">
        <div class="flex flex-col gap-4">
          <span class="font-bold">Категории</span>
          <ul class="flex flex-col gap-2">
            <li v-for="item in data.kategoriiFuters.data" :key="item.id">
              <NuxtLink
                :to="`/` + item.attributes.URL"
                class="text-sm cursor-pointer"
                >{{ item.attributes.Name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <span class="font-bold">Услуги</span>
          <ul class="flex flex-col gap-2">
            <li v-for="item in data.uslugiFuters.data" :key="item.id">
              <NuxtLink
                :to="`/` + item.attributes.URL"
                class="text-sm cursor-pointer"
                >{{ item.attributes.Name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <span class="font-bold">Помощь</span>
          <ul class="flex flex-col gap-2">
            <li v-for="item in data.pomoshhFuters.data" :key="item.id">
              <NuxtLink
                :to="`/` + item.attributes.URL"
                class="text-sm cursor-pointer"
                >{{ item.attributes.Name }}</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex flex-col items-end gap-4">
        <div class="flex gap-4">
          <a href="#"
            ><img
              src="~/assets/img/icons/free-icon-whatsapp-4494494_1.png"
              alt=""
          /></a>
          <a href="#"
            ><img
              src="~/assets/img/icons/free-icon-telegram-4401433_1.png"
              alt=""
          /></a>
          <a href="#"
            ><img
              src="~/assets/img/icons/free-icon-vkontakte-4494517_1.png"
              alt=""
          /></a>
        </div>
        <div><img src="~/assets/img/pay.png" alt="" /></div>
        <div class="text-sm">
          © 2005 – 2022 ООО «Ампер Плюс». Все права защищены.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FOOTER_ALL from '~/gql/query/main/FOOTER_ALL.gql'

const { data } = await useAsyncQuery(FOOTER_ALL)
</script>

<style></style>
