<script setup>
import Stage from './Stage.vue'
import {buildStage} from '../utils/buildStage';
import {runCycle} from '../utils/runCycle';

const game = buildStage(20, 50)

setInterval(() => {
  runCycle(game)
}, 1000)

</script>

<template>
  <h1>Game of Life</h1>
  <Stage :stage="game.stage" />
</template>

<style scoped>

</style>
