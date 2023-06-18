<script setup>
import cars from '~/assets/json/cars.json'

const marka = computed(() => {
  return cars.map(x => x.name)
})
const markaCheck = ref('')

const model = computed(() => {
  if (markaCheck.value.length > 0) {
    const modelAll = cars.filter(x => x.name == markaCheck.value)
    const modelsaa = modelAll.map(b => b.models)
    const modelsaaName = modelsaa[0].map(x => x.name)
    return modelsaaName
  } else {
    return ''
  }
})

const modelCheck = ref('')
</script>

<template>
  <div class="grid grid-cols-4 grid-rows-2 grid-flow-col gap-4 container">
    <div
      class="row-span-1 bg-white drop-shadow-xl rounded-md p-4 flex flex-col justify-center items-start gap-4"
    >
      <span class="mb-4 font-bold text-base"
        >Подбор аккумулятора для авто
      </span>
      <div class="flex flex-wrap gap-4">
        <Dropdown
          v-model="markaCheck"
          :options="marka"
          optionLabel=""
          placeholder="Марка"
          class="w-full md:w-14rem"
        />
        <Dropdown
          v-model="modelCheck"
          :options="model"
          optionLabel=""
          placeholder="Модель"
          class="w-full md:w-14rem"
        />
        <!-- <select
          v-model="markaCheck"
          class="bg-[#EEEEEE] rounded-md cursor-pointer"
        >
          <option v-for="(option1, i) in marka" v-bind:value="option1" :key="i">
            {{ option1 }}
          </option>
        </select>
        <select
          v-model="modelCheck"
          class="bg-[#EEEEEE] rounded-md cursor-pointer"
        >
          <option v-for="(option3, i) in model" v-bind:value="option3" :key="i">
            {{ option3 }}
          </option>
        </select> -->
        <!-- <select v-model="selectedYear" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option4, i) in optionsYear"
            v-bind:value="option4.value"
            :key="i"
            >{{ option4.text }}
          </option></select
        >
        <select v-model="selectedObem" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option2, i) in optionsObem"
            v-bind:value="option2.value"
            :key="i"
            >{{ option2.text }}
          </option>
        </select> -->
        <button class="text-white bg-red-700/70 w-full py-3 rounded-md">
          Подобрать
        </button>
      </div>
    </div>
    <!-- <div class="col-span-1 row-span-1 bg-white drop-shadow-xl rounded-md p-4 flex flex-col justify-center items-start gap-4">
      <span class="mb-4  font-bold text-base">Подбор масла для авто </span>
      <div class="flex flex-wrap gap-4">
        <select v-model="selectedmarkaAuto" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option1, i) in optionsmarkaAuto"
            v-bind:value="option1.value"
            :key="i"
            >{{ option1.text }}
          </option>
        </select>
        <select v-model="selectedModel" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option3, i) in optionsModel"
            v-bind:value="option3.value"
            :key="i"
            >{{ option3.text }}
          </option></select
        >
        <select v-model="selectedYear" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option4, i) in optionsYear"
            v-bind:value="option4.value"
            :key="i"
            >{{ option4.text }}
          </option></select
        >
        <select v-model="selectedObem" class=" bg-[#EEEEEE] rounded-md cursor-pointer">
          <option
            v-for="(option2, i) in optionsObem"
            v-bind:value="option2.value"
            :key="i"
            >{{ option2.text }}
          </option>
        </select>
        <button class="text-white bg-red-700/70 w-full py-3 rounded-md">Подобрать</button>
      </div>
    </div> -->
    <div class="row-span-2 col-span-3">
      <img src="~/assets/img/banner.jpg" alt="" class="w-full h-auto" />
    </div>
  </div>
</template>

<style></style>
