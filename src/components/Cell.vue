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
  width: 10px;
  height: 10px;
  margin: 1px;
  padding: 0;
  border: 1px solid #eaeaea;
  display: inline-block;
  cursor: pointer;
}
.cell-alive {
  background: #000;
}

.cell-dead {
}
</style>
