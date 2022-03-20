<script setup>
  import Cell from './Cell.vue'

  const props = defineProps({
    stage: Array
  })

  const emit = defineEmits(['coords'])
  function emitCoords(row, col) {
    emit('coords', { row, col })
  }
</script>

<template>
  <div class="stage">
    <div class="row" v-for="(row, i) in stage" :key="`row-${i}-${row}`">
      <Cell v-for="(cell, j) in row" :key="`cell-${j}-${cell}`" :alive="cell" @click="emitCoords(i, j)"/>
    </div>
  </div>
</template>

<style scoped>
.stage {
  margin-bottom: 20px;
}

.row {
  margin: 0;
  padding: 0;
  height: 12px;
}
</style>