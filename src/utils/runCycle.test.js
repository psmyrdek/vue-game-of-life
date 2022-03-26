import {describe, it, assert} from 'vitest'
import {calcLiveNeighbours, runCycle} from './runCycle.js'

describe('live neighbours calculations', () => {
    it ('should calculate neighbors on the edge', () => {
        const stage = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]
        const live = calcLiveNeighbours(stage, 0, 0)
        assert.equal(live, 0)
    })

    it ('should calculate neighbors on the edge', () => {
        const stage = [
            [false, true, false],
            [true, false, false],
            [false, false, false]
        ]
        const live = calcLiveNeighbours(stage, 0, 0)
        assert.equal(live, 2)
    })
})

describe('game cycle', () => {
    it ('should transform stage accordingly to game rules', () => {
        const game = {
            stage: [
                [false, true, false],
                [true, true, false],
                [false, false, false]
            ]
        }
        runCycle(game, { liveWhen: [2, 3], reviveWhen: [3]})
        assert.equal(game.stage[0][0], true)
    })
})