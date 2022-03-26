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

export function runCycle(game) {

    const {stage, liveWhen, reviveWhen} = game
    const changes = []

    for (let i = 0; i < stage.length; i++) {
        for (let j = 0; j < stage[i].length; j++) {

            let isCellAlive = stage[i][j]
            const liveNeighbours = calcLiveNeighbours(stage, i, j)

            if (isCellAlive && !liveWhen.includes(liveNeighbours)) {
                changes.push({ row: i, col: j, value: false})
            } else if (!isCellAlive && reviveWhen.includes(liveNeighbours)) {
                changes.push({ row: i, col: j, value: true})
            }
        }
    }

    changes.forEach(({row, col, value}) => {
        stage[row][col] = value
    })

}