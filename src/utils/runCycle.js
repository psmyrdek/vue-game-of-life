export function calcLiveNeighbours(stage, i, j) {
    return [
        stage[i - 1]?.[j - 1],
        stage[i - 1]?.[j],
        stage[i - 1]?.[j + 1],
        stage[i]?.[j - 1],
        stage[i]?.[j + 1],
        stage[i + 1]?.[j - 1],
        stage[i + 1]?.[j],
        stage[i + 1]?.[j + 1]
    ].filter(cell => cell).length
}

export function runCycle(game, config) {

    const {liveWhen, reviveWhen} = config
    const gameCopy = { stage: [] }

    for (let i = 0; i < game.stage.length; i++) {

        gameCopy.stage.push([])

        for (let j = 0; j < game.stage[i].length; j++) {

            gameCopy.stage[i].push(game.stage[i][j])

            let isCellAlive = game.stage[i][j]
            const liveNeighbours = calcLiveNeighbours(game.stage, i, j)

            if (isCellAlive) {
                if (liveWhen.includes(liveNeighbours)) {
                    isCellAlive = true
                } else {
                    isCellAlive = false
                }
            } else {
                if (reviveWhen.includes(liveNeighbours)) {
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