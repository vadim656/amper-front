<script setup>
import aSidebarFilter from './a-sidebar-filter.vue'

const Marka = ref([
  {
    name: 'Varta',
    val: 'varta'
  },
  {
    name: 'Bars',
    val: 'bars'
  },
  {
    name: 'Feon',
    val: 'feon'
  },
  {
    name: 'Исток',
    val: 'исток'
  }
])

const markaFilter = ref([])

const Emkost = ref([
  {
    name: 'от 60Ah',
    val: '60'
  },
  {
    name: 'от 80Ah',
    val: '80'
  },
  {
    name: 'от 100Ah',
    val: '100'
  },
  {
    name: 'от 150Ah',
    val: '150'
  }
])

const emkostFilter = ref([])

const Gabarits = ref([
  {
    name: '550X480X970',
    val: '550X480X970'
  },
  {
    name: '660X330X960',
    val: '660X330X960'
  },
  {
    name: '850X380X1130',
    val: '850X380X1130'
  },
  {
    name: '850X480X1130',
    val: '850X480X1130'
  }
])

const gabaritsFilter = ref([])

const Polyarnost = ref([
  {
    name: 'Прямая',
    val: 'прямая'
  },
  {
    name: 'Обратная',
    val: 'обратная'
  },
  {
    name: 'Боковая',
    val: 'боковая'
  },
  {
    name: 'Прямая (грузовые)',
    val: 'грузовые'
  }
])

const polyarnostFilter = ref([])

const resetView = computed(() => {
  return !markaFilter.value.length ||
    !emkostFilter.value.length ||
    !gabaritsFilter.value.length ||
    !polyarnostFilter.value.length
    ? false
    : true
})

const resetFilters = () => {
  markaFilter.value = []
  emkostFilter.value = []
  gabaritsFilter.value = []
  polyarnostFilter.value = []
}
</script>
<template>
  <div class="flex flex-col gap-4 p-4 rounded-md bg-white shadow-xl">
    <div class="flex flex-col gap-3 items-start">
      <span>Цена:</span>
      <div class="flex justify-start w-full gap-3">
        <input
          class="p-3 border-[1px] border-[#212121]/20 max-w-[100px] text-xs rounded-md"
          type="text"
          placeholder="от 100"
        />
        <input
          class="p-3 border-[1px] border-[#212121]/20 max-w-[100px] text-xs rounded-md"
          type="text"
          placeholder="до 10 000"
        />
      </div>
    </div>
    <div class="flex flex-col gap-6">
      {{ markaFilter }}<br />
      {{ emkostFilter }}<br />
      {{ gabaritsFilter }}<br />
      {{ polyarnostFilter }}

      <div class="flex flex-col gap-4 items-start">
        <span class="font-medium">Производитель:</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="varta"
              id="varta"
              v-model="markaFilter"
            />
            <label for="varta">Varta</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="Bars"
              id="Bars"
              v-model="markaFilter"
            />
            <label for="Bars">Bars</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="Feon"
              id="Feon"
              v-model="markaFilter"
            />
            <label for="Feon">Feon</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="Исток"
              id="Исток"
              v-model="markaFilter"
            />
            <label for="Исток">Исток</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-start">
        <span class="font-medium">Емкость:</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-start w-full gap-3 text-sm">
            <input type="radio" value="60" id="60" v-model="emkostFilter" />
            <label for="60">от 60Ah</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input type="radio" value="80" id="80" v-model="emkostFilter" />
            <label for="80">от 80Ah</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input type="radio" value="100" id="100" v-model="emkostFilter" />
            <label for="100">от 100Ah</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input type="radio" value="150" id="150" v-model="emkostFilter" />
            <label for="150">от 150Ah</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-start">
        <span class="font-medium">Размеры:</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="550X480X970"
              id="550X480X970"
              v-model="gabaritsFilter"
            />
            <label for="550X480X970">550X480X970 мм</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="660X330X960"
              id="660X330X960"
              v-model="gabaritsFilter"
            />
            <label for="660X330X960">660X330X960 мм</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="850X380X1130"
              id="850X380X1130"
              v-model="gabaritsFilter"
            />
            <label for="850X380X1130">850X380X1130 мм</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="checkbox"
              value="850X480X1130"
              id="850X480X1130"
              v-model="gabaritsFilter"
            />
            <label for="850X480X1130">850X480X1130 мм</label>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 items-start">
        <span class="font-medium">Полярность:</span>
        <div class="flex flex-col gap-2">
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="radio"
              value="Прямая"
              id="polyarnostFilter1"
              v-model="polyarnostFilter"
            />
            <label for="polyarnostFilter1">Прямая</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="radio"
              value="Обратная"
              id="polyarnostFilter2"
              v-model="polyarnostFilter"
            />
            <label for="polyarnostFilter2">Обратная</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="radio"
              value="Боковая"
              id="polyarnostFilter3"
              v-model="polyarnostFilter"
            />
            <label for="polyarnostFilter3">Боковая</label>
          </div>
          <div class="flex justify-start w-full gap-3 text-sm">
            <input
              type="radio"
              value="Прямая (грузовые)"
              id="polyarnostFilter4"
              v-model="polyarnostFilter"
            />
            <label for="polyarnostFilter4">Прямая (грузовые)</label>
          </div>
        </div>
      </div>

      <!-- <a-sidebar-filter :Name="'Емкость'" :Value="Emkost" />
      <a-sidebar-filter :Name="'Габариты'" :Value="Gabarits" />
      <a-sidebar-filter :Name="'Полярность'" :Value="Polyarnost" /> -->
    </div>

    <div></div>
    <div></div>
    <div></div>
    <button
      v-if="resetView"
      @click="resetFilters"
      class="bg-white border-[1px] border-red-700/70 text-red-700/70 py-3 rounded-md hover:bg-red-700/70 hover:text-white anime"
    >
      Сбросить
    </button>
    <button
      class="bg-white border-[1px] border-red-700/70 text-red-700/70 py-3 rounded-md hover:bg-red-700/70 hover:text-white anime"
    >
      Применить фильтры
    </button>
  </div>
</template>

<style></style>
