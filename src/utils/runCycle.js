function calcLiveNeighbours(stage, i, j) {
    const maxRows = stage.length
    const maxCols = stage[0].length

    return [
        (i > 0 && j > 0) ? stage[i - 1][j - 1] : false,
        (i > 0) ? stage[i - 1][j] : false,
        (i > 0 && j <= maxCols - 2) ? stage[i - 1][j + 1] : false,
        (j > 0) ? stage[i][j - 1] : false,
        (j <= maxCols - 2) ? stage[i][j + 1] : false,
        (i <= maxRows - 2 && j > 0) ? stage[i + 1][j - 1] : false,
        (i <= maxRows - 2) ? stage[i + 1][j] : false,
        (i <= maxRows - 2 && j <= maxCols - 2) ? stage[i + 1][j + 1] : false
    ].filter(cell => cell).length
}

export function runCycle(game) {

    const gameCopy = { stage: [] }

    for (let i = 0; i < game.stage.length; i++) {

        gameCopy.stage.push([])

        for (let j = 0; j < game.stage[i].length; j++) {

            gameCopy.stage[i].push(game.stage[i][j])

            let isCellAlive = game.stage[i][j]
            const liveNeighbours = calcLiveNeighbours(game.stage, i, j)

            if (isCellAlive) {
                if (liveNeighbours < 2) {
                    isCellAlive = false
                } else if (liveNeighbours === 2 || liveNeighbours === 3) {
                    isCellAlive = true
                } else if (liveNeighbours > 3) {
                    isCellAlive = false
                }
            } else {
                if (liveNeighbours === 3) {
                    isCellAlive = true
                }
            }

            gameCopy.stage[i][j] = isCellAlive
        }
    }

    for (let i = 0; i < game.stage.length; i++) {
        for (let j = 0; j < game.stage[i].length; j++) {
            game.stage[i][j] = gameCopy.stage[i][j]
        }
    }
}