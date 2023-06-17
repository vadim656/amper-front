<template>
  <div
    class="p-4 rounded-md bg-white shadow-xl min-h-screen flex flex-col gap-4"
  >
    <div class="text-sm flex flex-col gap-3">
      <span class="font-medium">Мой профиль</span>
      <ul class="flex flex-col gap-2 text-neutral-600">
        <NuxtLink to="/lk/profile/info">Личные данные</NuxtLink>

        <NuxtLink to="/lk/profile/reset-password">Смена пароля</NuxtLink>
        <NuxtLink to="/lk/profile/delete-account"
          >Удалить личный кабинет</NuxtLink
        >
      </ul>
    </div>
    <div class="text-sm flex flex-col gap-3">
      <span class="font-medium">Заказы и товары</span>
      <ul class="flex flex-col gap-2 text-neutral-600">
        <NuxtLink to="/lk/orders/all-orders">Мои заказы</NuxtLink>
        <!-- <NuxtLink to="/lk/orders/zakladki">Закладки</NuxtLink> -->
        <NuxtLink to="/lk/orders/ojidaemie">Ожидаемые товары</NuxtLink>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
