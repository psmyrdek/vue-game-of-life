<script setup>
  import Cell from './Cell.vue'

  const props = defineProps({
    stage: Array
  })
</script>

<template>
  <div class="stage">
    <div class="row" v-for="row in stage">
      <Cell v-for="cell in row" :key="cell" :alive="cell" />
    </div>
  </div>
</template>



<style scoped>

</style>