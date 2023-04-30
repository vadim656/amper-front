<template>
  <div class=" container grid grid-cols-12 gap-8">
    <the-breadcams title="Оформление заказа" class="col-span-12" />
    <div class="col-span-12 text-3xl font-bold">
      Оформление заказа
    </div>
    <section class="col-span-12 grid grid-cols-12 gap-8 ">
      <div
        class="col-span-7 border rounded-md overflow-hidden border-[#212121]/20"
      >
        <div class="grid grid-cols-7 gap-2 bg-[#EAEAEA] p-3 text-sm">
          <span class="col-span-1">Фото</span>
          <span class="col-span-2">Наименование</span>
          <span class="col-span-1">Стоимость</span>
          <span class="col-span-1">Кол-во</span>
          <span class="col-span-2">Сумма</span>
        </div>
        <a-item-cart v-for="item in cart.cart" :key="item.id" :data="item" />
      </div>
      <div class="col-span-5">
        <div class="flex flex-col gap-4 w-full max-w-[400px]">
          <div
            @click="tipZakaz = 1"
            class="flex justify-between items-center  bg-white p-3 rounded-md  cursor-pointer anime"
            :class="[
              tipZakaz == 1
                ? 'border-[1px] border-[#212121]/20 drop-shadow-xl'
                : 'drop-shadow-md'
            ]"
          >
            <div class="flex gap-4 items-center">
              <img src="~/assets/img/icons/Group393.jpg" alt="" />
              <div class="flex flex-col gap-3 items-start">
                <span class="font-bold">Самовывоз из магазина</span>
                <button class="text-xs">Доваторцев, 1</button>
                <button class="text-red/70 text-sm">Изменить адрес</button>
              </div>
            </div>

            <svg
              v-if="tipZakaz == 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              v-else
              src="../../assets/img/icons/CheckboxContainer2.svg"
              alt=""
            />
          </div>
          <div
            @click="tipZakaz = 2"
            class="flex justify-between items-center  bg-white p-3 rounded-md  cursor-pointer anime"
            :class="[
              tipZakaz == 2
                ? 'border-[1px] border-[#212121]/20 drop-shadow-xl'
                : 'drop-shadow-md'
            ]"
          >
            <div class="flex gap-4 items-center">
              <img src="~/assets/img/icons/Group394.jpg" alt="" />
              <div class="flex flex-col gap-3 items-start">
                <span class="font-bold">Доставка на такси по городу</span>
                <button class="text-xs">Бесплатно от 5 000 ₽</button>
              </div>
            </div>

            <svg
              v-if="tipZakaz == 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              v-else
              src="../../assets/img/icons/CheckboxContainer2.svg"
              alt=""
            />
          </div>
          <div
            @click="tipZakaz = 3"
            class="flex justify-between items-center  bg-white p-3 rounded-md  cursor-pointer anime"
            :class="[
              tipZakaz == 3
                ? 'border-[1px] border-[#212121]/20 drop-shadow-xl'
                : 'drop-shadow-md'
            ]"
          >
            <div class="flex gap-4 items-center">
              <img src="~/assets/img/icons/Group395.jpg" alt="" />
              <div class="flex flex-col gap-3 items-start">
                <span class="font-bold">Доставка ПЭК, СДЭК</span>
                <button class="text-xs">До пункта выдачи в вашем городе</button>
              </div>
            </div>

            <svg
              v-if="tipZakaz == 3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              v-else
              src="../../assets/img/icons/CheckboxContainer2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- var - 1 -->
    <section class="col-span-12 grid grid-cols-12 gap-8 ">
      <div class="flex flex-col gap-4 col-span-4 ">
        <span class="font-bold">Данные получателя</span>
        <div class="grid grid-cols-2 gap-4">
          <input
            type="text"
            v-model="form.name"
            class="input-form"
            placeholder="Имя"
          />
          <input
            type="text"
            v-model="form.family"
            class="input-form"
            placeholder="Фамилия"
          />
          <input
            type="text"
            v-model="form.phone"
            class="input-form"
            placeholder="Телефон"
          />
          <input
            type="text"
            v-model="form.email"
            class="input-form"
            placeholder="Email"
          />
        </div>
      </div>
      <div class="flex flex-col gap-4 col-span-3 ">
        <span class="font-bold">Оплата</span>
        <div class="flex flex-col  gap-4">
          <div
            @click="form.payment = 1"
            class="flex justify-between items-center  bg-white p-4 rounded-md  cursor-pointer"
            :class="[
              form.payment == 1
                ? 'border-[1px] border-[#212121]/20 drop-shadow-xl'
                : 'drop-shadow-md'
            ]"
          >
            <span>Оплата картой</span>
            <svg
              v-if="form.payment == 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              v-else
              src="../../assets/img/icons/CheckboxContainer2.svg"
              alt=""
            />
          </div>
          <div
            @click="form.payment = 2"
            class="flex justify-between items-center drop-shadow-xl bg-white p-4 rounded-md  cursor-pointer"
            :class="[
              form.payment == 2
                ? 'border-[1px] border-[#212121]/20 drop-shadow-xl'
                : 'drop-shadow-md'
            ]"
          >
            <span>Оплата в магазине</span>
            <svg
              v-if="form.payment == 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
            <img
              v-else
              src="../../assets/img/icons/CheckboxContainer2.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-4 col-span-3  bg-white p-4 rounded-md  cursor-pointer drop-shadow-xl anime"
      >
        <div class="flex justify-between items-center">
          <span>Сумма заказа:</span>
          <span>{{ summPriceCart }} ₽</span>
        </div>
        <div class="flex justify-between items-center">
          <span>Доставка:</span>
          <span>Бесплатно</span>
        </div>
        <div class="flex justify-between items-center font-bold">
          <span class="text-2xl">Итого:</span>
          <span class="text-2xl text-red/70">{{ summPriceCart }} ₽</span>
        </div>
        <button class="bg-red/70 p-3 rounded-md text-white">
          Оформить заказ
        </button>
      </div>
    </section>
    <!-- var - 1 -->





  </div>
</template>

<script>
import TheBreadcams from '../../components/UI/TheBreadcams.vue'
import { useCart } from '@/store'
import AItemCart from '../../components/Cart/a-item-cart.vue'




// запрос на создание заказа

// {
//   "data": {
//     "ID_Store": "4",
//     "UserName": "Броваренко Вадим Дмитриевич4",
//     "UserType": false,
//     "Downloaded1C": false,
//     "Status": "pending",
//     "OrderProductComponent": [
//       {
//         "__component": "order-product.order-product",
//         "Value": "1",
//         "tovary": {
//             "id": 3196
//         }
//       },
//       {
//         "__component": "order-product.order-product",
//         "Value": "1",
//         "tovary": {
//             "id": 3200
//         }
//       }
//     ]
    
//   }
// }


export default {
  components: { TheBreadcams, AItemCart },
  layout: 'main',
  setup () {
    const cart = useCart()
    return { cart }
  },
  data () {
    return {
      tipZakaz: 1,
      form: {
        name: '',
        family: '',
        phone: '',
        email: '',
        payment: 1
      }
    }
  },
  computed: {
    summPriceCart () {
      let result = this.cart.getCart.reduce((prev, item) => {
        return prev + parseInt(item.attributes.Price)
      }, 0)
      return result
    }
  }
}
</script>

<style></style>
