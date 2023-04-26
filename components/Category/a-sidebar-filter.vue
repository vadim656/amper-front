<script setup></script>
<template>
  <div class="flex justify-start w-full gap-3 text-sm">
    <slot name="input"></slot>
    <label><slot name="label"></slot></label>
  </div>
</template>
