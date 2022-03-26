<script setup>
import {ref} from "vue";
import Stage from './Stage.vue'
import {buildStage} from '../utils/buildStage';
import {runCycle} from '../utils/runCycle';

let gameTimer = null
const isPaused = ref(true)

const game = buildStage(30, 70)

const config = {
  liveWhen: [2, 3],
  reviveWhen: [3]
}

function startGame() {
  gameTimer = setInterval(() => {
    runCycle(game, config)
  }, 100)
  isPaused.value = false
}

function stopGame() {
  clearInterval(gameTimer)
  isPaused.value = true
}

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
  <button @click="startGame()">Start</button>
  <button @click="stopGame()">Stop</button>
</template>

<style scoped>

</style>
