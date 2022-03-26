import {describe, it, assert} from 'vitest'
import {calcLiveNeighbours, runCycle} from './runCycle.js'

describe('live neighbours', () => {
    it ('should calculate on the edge - ver 1', () => {
        const stage = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]
        const live = calcLiveNeighbours(stage, 0, 0)
        assert.equal(live, 0)
    })

    it ('should calculate on the edge - ver 2', () => {
        const stage = [
            [false, true, false],
            [true, false, false],
            [false, false, false]
        ]
        const live = calcLiveNeighbours(stage, 0, 0)
        assert.equal(live, 2)
    })

    it ('should calculate in the middle', () => {
        const stage = [
            [false, true, true],
            [true, true, true],
            [false, false, false]
        ]
        const live = calcLiveNeighbours(stage, 1, 1)
        assert.equal(live, 4)
    })
})

describe('game cycle', () => {
    it ('should transform stage accordingly to game rules', () => {
        const game = {
            stage: [
                [false, true, false],
                [true, true, false],
                [false, false, false]
            ],
            liveWhen: [2, 3],
            reviveWhen: [3]
        }
        runCycle(game)
        assert.equal(game.stage[0][0], true)
    })
})