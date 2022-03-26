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
    const changes = []

    for (let i = 0; i < game.stage.length; i++) {
        for (let j = 0; j < game.stage[i].length; j++) {

            let isCellAlive = game.stage[i][j]
            const liveNeighbours = calcLiveNeighbours(game.stage, i, j)

            if (isCellAlive && !liveWhen.includes(liveNeighbours)) {
                changes.push({ row: i, col: j, value: false})
            } else if (!isCellAlive && reviveWhen.includes(liveNeighbours)) {
                changes.push({ row: i, col: j, value: true})
            }
        }
    }

    changes.forEach(({row, col, value}) => {
        game.stage[row][col] = value
    })

}