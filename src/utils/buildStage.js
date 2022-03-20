import {reactive} from "vue";

export function buildStage(rows, cols) {
    const game = reactive({
        stage: []
    })

    for (let i = 0; i < rows; i++) {
        const row = []
        for (let j = 0; j < cols; j++) {
            row.push(false)
        }
        game.stage.push(row)
    }

    return game
}