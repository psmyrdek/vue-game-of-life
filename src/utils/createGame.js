import {reactive} from "vue";

function addSpaceship(stage, startRow, startCol) {
    stage[startRow + 1][startCol] = true
    stage[startRow + 2][startCol + 1] = true
    stage[startRow + 2][startCol + 2] = true
    stage[startRow][startCol + 2] = true
    stage[startRow + 1][startCol + 2] = true
}

function addStick(stage, startRow, startCol) {
    stage[startRow][startCol] = true
    stage[startRow + 1][startCol] = true
    stage[startRow + 2][startCol] = true
}

export function createGame({rows, cols, liveWhen, reviveWhen}) {
    const game = reactive({
        stage: [],
        liveWhen,
        reviveWhen
    })

    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
            row.push(false)
        }
        game.stage.push(row)
    }

    /* Modify initial setup */
    addSpaceship(game.stage, 0, 0)
    addSpaceship(game.stage, 20, 20)
    addStick(game.stage, 5, 50)
    addStick(game.stage, 20, 50)

    return game
}