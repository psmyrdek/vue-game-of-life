<script setup>
import Stage from './Stage.vue'
import {createGame} from '../utils/createGame';
import {runCycle} from '../utils/runCycle';
import {useCancellableInterval} from "../utils/useTimer";

const game = createGame({
  rows: 30,
  cols: 70,
  liveWhen: [2, 3],
  reviveWhen: [3]
})

const {isPaused, start, stop} = useCancellableInterval(() => {
  runCycle(game)
}, 100)

function handleCoords({row, col}) {
  if (!isPaused.value) {
    return;
  }
  game.stage[row][col] = !game.stage[row][col]
}

</script>

<template>
  <h1>Game of Life {{ isPaused ? '(paused)' : '' }}</h1>
  <Stage :stage="game.stage" @coords="handleCoords($event)"/>
  <button @click="start()">Start</button>
  <button @click="stop()">Stop</button>
</template>

<style scoped>

</style>
