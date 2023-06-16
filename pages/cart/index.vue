<template>
  <div class="container grid grid-cols-12 gap-8">
    <the-breadcams title="Оформление заказа" class="col-span-12" />
    <!-- <pre>{{ cart.cart }}</pre> -->
    <div class="col-span-12 text-xl font-bold">Оформление заказа</div>
    <section class="col-span-12 grid grid-cols-12 gap-8">
      <DataTable :value="cart.cart" class="col-span-12" dataKey="index">
        <Column header="Наименование" class="text-sm">
          <template #body="slotProps">
            <div class="flex flex-col items-start gap-2">
              <span>{{ slotProps.data.attributes.Name }}</span>
              <span class="text-neutral-big text-xs"
                >Арт: {{ slotProps.data.attributes.Artikul }}</span
              >
            </div>
          </template>
        </Column>
        <Column header="Стоимость" class="text-sm">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              {{ slotProps.data.attributes.Price }}
            </div>
          </template>
        </Column>
        <Column header="Кол-во" class="text-sm !w-[10%]">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <input
                type="number"
                :min="1"
                :max="100"
                :value="slotProps.data.colVo"
                @change="changeColItemCart(slotProps.data, $event.target.value)"
                class="border p-2 rounded-md w-full max-w-10 border-neutral"
              />
            </div>
          </template>
        </Column>
        <Column header="Сумма" class="text-sm !w-[10%]">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              {{
                getPriceItem(
                  slotProps.data.attributes.Price,
                  slotProps.data.colVo
                )
              }}
              ₽
            </div>
          </template>
        </Column>
        <Column class="text-sm w-[2%]">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <button @click="deleteFromCart(slotProps.data.id)">
                <IconsIDelete class="w-5 h-5 text-red" />
              </button>
            </div>
          </template>
        </Column>
      </DataTable>
      <div class="col-span-12 text-xl font-bold">Доставка</div>
      <div class="col-span-12">
        <div class="grid grid-cols-3 gap-4 w-full">
          <div
            @click="tipZakaz = 1"
            class="flex justify-between items-center bg-white p-3 rounded-md cursor-pointer anime"
            :class="[tipZakaz == 1 ? ' drop-shadow-xl' : 'drop-shadow-md']"
          >
            <div class="flex gap-4 items-center">
              <img src="~/assets/img/icons/Group393.jpg" alt="" />
              <div class="flex flex-col gap-3 items-start">
                <span class="font-bold">Самовывоз из магазина</span>
                <span class="text-xs">{{ activeStore }}</span>
                <button
                  @click="visibleSity = !visibleSity"
                  class="text-red/70 text-sm"
                >
                  Изменить адрес
                </button>
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
            class="flex justify-between items-center bg-white p-3 rounded-md cursor-pointer anime"
            :class="[tipZakaz == 2 ? ' drop-shadow-xl' : 'drop-shadow-md']"
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
            class="flex justify-between items-center bg-white p-3 rounded-md cursor-pointer anime"
            :class="[tipZakaz == 3 ? ' drop-shadow-xl' : 'drop-shadow-md']"
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
    <section class="col-span-12 grid grid-cols-3 grid-flow-col gap-4">
      <div class="flex flex-col col-span-1 row-span-1 gap-4">
        <span class="font-bold text-xl">Данные получателя</span>
        <div class="grid grid-cols-1 gap-4">
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

      <div
        class="row-span-1 col-span-2 flex flex-col justify-between w-full h-full gap-4 bg-white p-4 rounded-md cursor-pointer drop-shadow-xl anime"
      >
        <div class="flex justify-between items-center">
          <span>Сумма заказа:</span>
          <span>{{ summPriceCart }} ₽</span>
        </div>
        <div
          v-if="summPriceCart >= 5000"
          class="flex justify-between items-center"
        >
          <span>Доставка:</span>
          <span>Бесплатно</span>
        </div>
        <div class="flex flex-col col-span-1 row-span-1 gap-4">
          <div class="flex w-full gap-4">
            <div
              @click="form.payment = 1"
              class="flex justify-between items-center bg-white p-4 rounded-md cursor-pointer w-full"
              :class="[
                form.payment == 1 ? ' drop-shadow-xl' : 'drop-shadow-md'
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
              class="flex justify-between items-center bg-white p-4 rounded-md cursor-pointer w-full"
              :class="[
                form.payment == 2 ? ' drop-shadow-xl' : 'drop-shadow-md'
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
        <div class="flex justify-between items-center font-bold">
          <div class="flex gap-4 items-center font-bold">
            <span class="text-2xl">Итого:</span>
            <span class="text-2xl text-red/70">{{ summPriceCart }} ₽</span>
          </div>

          <button class="bg-red/70 p-3 rounded-md text-white">
            Оформить заказ
          </button>
        </div>
      </div>
    </section>
    <!-- var - 1 -->
    <Dialog
      v-model:visible="visibleSity"
      modal
      header="Выберите магазин"
      :style="{ width: '50vw' }"
    >
      <div class="grid grid-cols-1 gap-4">
        <div v-for="gorod in allSity" :key="gorod.id">
          <span class="text-xl">{{ gorod.attributes.Name }}</span>
          <div class="flex flex-col gap-2 mt-4">
            <div
              v-for="store in gorod.attributes.magazinies.data"
              :key="store.id"
              class="p-2 rounded-md flex items-center justify-between border border-neutral"
              @click="
                activeStore = store.attributes.Name.replace(
                  `${gorod.attributes.Name}`,
                  ''
                )
                  .replace('г.', '')
                  .replace(',', '')
              "
            >
              <span>
                {{
                  store.attributes.Name.replace(`${gorod.attributes.Name}`, '')
                    .replace('г.', '')
                    .replace(',', '')
                }}</span
              >
              <IconsICheck
                v-if="
                  activeStore ==
                  store.attributes.Name.replace(`${gorod.attributes.Name}`, '')
                    .replace('г.', '')
                    .replace(',', '')
                "
                class="w-4 h-4"
              />
            </div>
          </div>
        </div>
      </div>
      <template #footer>
        <Button
          label="Подтвердить"
          icon="pi pi-check"
          @click="visibleSity = false"
          class="!bg-[#32D473]"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import TheBreadcams from '@/components/UI/TheBreadcams.vue'
import { useCart } from '@/store'
import { CART_SITYES } from '@/gql/query/CART'

const cart = useCart()

const tipZakaz = ref(1)
const form = ref({
  name: '',
  family: '',
  phone: '',
  email: '',
  payment: 1
})

const value3 = ref(1)

const summPriceCart = computed(() => {
  let result = cart.getCart.reduce((prev, item) => {
    return prev + parseInt(item.attributes.Price * item.colVo)
  }, 0)
  return result
})

function deleteFromCart (id) {
  cart.deleteItem(id)
  console.log('delete', id)
}

function changeColItemCart (i, num) {
  console.log('changeColItemCart', i, num)
  cart.changeColItem(i, num)
}

const getPriceItem = (a, b) => {
  return a * b
}

const visibleSity = ref(false)
const activeStore = ref('')

const { result: dataProducts, loading: dataProductsLoading } =
  useQuery(CART_SITYES)

const allSity = computed(() => dataProducts.value?.sities.data ?? [])

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
</script>

<style scoped>
.inputNum input {
  width: 60px;
}
.p-button {
 
  border: none !important;
  
}
</style>
