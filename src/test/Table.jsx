const Table = ({hFields, vFields}) => {
    const fields = createFields({hFields, vFields})

    const InputCell = ({coordinates}) => (
        <input
            className="border-gray-200 size-3 h-8 p-2 w-48 outline-none"
            type="text"
            id={coordinates}
            placeholder="Escribe algo"
            onKeyDown={(e) => handleKeyDown({ e, hFields, vFields })}
            style={{borderWidth: '1px'}}
        />
    )

    const InputRow = ({row}) => (
        <div
            className="grid w-auto"
            style={{gridTemplateColumns: createGridColumnsValue(hFields)}}
        >
            {row.map(
                (coordinates) => (
                    <InputCell key={coordinates} coordinates={coordinates} />
                )
            )}
        </div>
    )

    return (
        <div>
            {
                fields.map(
                    (row, index) => (
                        <InputRow key={index} row={row} />
                    )
                )
            }
        </div>
    )
}

const createFields = ({hFields, vFields}) => {
    const h = []
    for (let i = 0; i < vFields; i++) {
        const v = []
        for (let j = 0; j < hFields; j++) {
            v.push(`${j}-${i}`)
        }
        h.push(v)
    }
    return h
}

const createGridColumnsValue = (columns) => {
    let value = ""
    for (let i = 1; i <= columns; i++) {
        if ( value ) {
            value += " "
        }
        value += `1fr`
    }
    return (value)
}

const MOVE_KEYS = {
    ARROW_DOWN: "ArrowDown",
    ENTER: "Enter",
    ARROW_UP: "ArrowUp",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
}

const handleKeyDown = ({ e, hFields, vFields }) => {
    if ( Object.values(MOVE_KEYS).indexOf(e.key) !== -1 ) {
        moveToField[e.key]({ id: e.target.id, hFields, vFields })
    }
}

const getCoordinates = (id) => {
    let [x, y] = id.split("-")
    x = Number(x)
    y = Number(y)
    return [x, y]
}

const moveDown = ({id, vFields}) => {
    let [x, y] = getCoordinates(id)
    if ( y + 1 < vFields ) {
        const newField = document.getElementById(`${x}-${y+1}`)
        newField.focus()
    }
}

const moveUp = ({id}) => {
    let [x, y] = getCoordinates(id)
    if ( y - 1 >= 0 ) {
        const newField = document.getElementById(`${x}-${y-1}`)
        newField.focus()
    }
}

const moveRight = ({id, hFields}) => {
    let [x, y] = getCoordinates(id)
    if ( x + 1 < hFields ) {
        const newField = document.getElementById(`${x+1}-${y}`)
        newField.focus()
    }
}

const moveLeft = ({id}) => {
    let [x, y] = getCoordinates(id)
    if ( x - 1 >= 0 ) {
        const newField = document.getElementById(`${x-1}-${y}`)
        newField.focus()
    }
}

const moveToField = {
    [MOVE_KEYS.ARROW_DOWN]: moveDown,
    [MOVE_KEYS.ENTER]: moveDown,
    [MOVE_KEYS.ARROW_UP]: moveUp,
    [MOVE_KEYS.ARROW_LEFT]: moveLeft,
    [MOVE_KEYS.ARROW_RIGHT]: moveRight
}

export default Table;
