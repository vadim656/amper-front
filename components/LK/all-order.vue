<template>
  <div class="container">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div></div>
      <div class="w-full">
        <DataTable :value="dataResultsCom" showGridlines class="w-full">
          <Column header="Заказ" headerStyle="width:10rem">
            <template #body="slotProps">
              <span class="text-sm">
                № {{ slotProps.data.attributes.UID }}</span
              >
            </template>
          </Column>
          <Column header="Дата" class="!w-[2%]">
            <template #body="slotProps">
              <div class="flex items-center gap-2 text-sm">
                <span>{{ timeDay(slotProps.data.attributes.createdAt) }}</span>
              </div>
            </template>
          </Column>
          <Column header="Товары">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <div class="grid grid-cols-1 divide-y-[1px] divide-neutral">
                  <span
                    v-for="(item, i) in slotProps.data.attributes
                      .OrderProductComponent"
                    :key="item.id"
                    class="py-2"
                  >
                    <div class="flex flex-col gap-1">
                      <span class="text-sm">
                        {{ item.Value }} x
                        {{ item.tovary.data.attributes.Name }}
                      </span>
                      <span class="text-xs text-neutral-600/50"
                        >Арт. {{ item.tovary.data.attributes.Artikul }}</span
                      >
                    </div>
                  </span>
                </div>
              </div>
            </template>
          </Column>
          <Column header="Сумма">
            <template #body="slotProps">
              <div class="flex items-center gap-2">
                <span class="text-sm"
                  >{{
                    resultSumm(slotProps.data.attributes.OrderProductComponent)
                  }}
                  ₽</span
                >
              </div>
            </template>
          </Column>
          <Column header="Статус">
            <template #body="slotProps">
              <div class="flex items-center gap-2 text-xs">
                <span v-if="slotProps.data.attributes.Status == 'pending'"
                  >Обработка</span
                >
                <span
                  v-else-if="slotProps.data.attributes.Status == 'complete'"
                  class="text-green-500"
                  >Завершен</span
                >
                <span v-else-if="slotProps.data.attributes.Status == 'error'"
                  >Отменен</span
                >
              </div>
            </template>
          </Column>
          <template #footer class="text-sm">
            Всего
            {{ dataResultsCom ? dataResultsCom.length : 0 }} заказов.
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUser } from '@/store'
import { ALL_ORDERS } from '@/gql/LK'

const user = useUser()
const dayjs = useDayjs()

const timeDay = t => {
  return dayjs(t).format('DD.MM.YYYY')
}

const { result: dataResults } = useQuery(ALL_ORDERS, () => ({
  ID: user.userData.id
}))

const dataResultsCom = computed(
  () =>
    dataResults.value?.usersPermissionsUser.data.attributes.orders.data ?? []
)

const resultSumm = data => {
  const sumWithInitial = data.reduce(
    (acc, cur) => acc + cur.Value * cur.tovary.data.attributes.Price,
    0
  )
  console.log(data, sumWithInitial)
  return sumWithInitial
}

// const products = ref();
// const formatCurrency = (value) => {
//     return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
// };
// const getSeverity = (product) => {
//     switch (product.inventoryStatus) {
//         case 'INSTOCK':
//             return 'success';

//         case 'LOWSTOCK':
//             return 'warning';

//         case 'OUTOFSTOCK':
//             return 'danger';

//         default:
//             return null;
//     }
// };
</script>
