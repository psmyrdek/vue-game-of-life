<script setup>
  const props = defineProps({
    alive: Boolean
  })
  const cellClass = props.alive ? 'cell cell-alive' : 'cell cell-dead'
</script>

<template>
  <div :class="cellClass"></div>
</template>

<style scoped>
.cell {
  width: 8px;
  height: 8px;
  margin: 1px;
  padding: 0;
  border: 1px solid #efefef;
  display: inline-block;
  cursor: pointer;
}
.cell-alive {
  background: #000;
}

.cell-dead {
}
</style>
