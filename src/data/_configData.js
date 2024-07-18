export const chartsSettingsOptions = {
    // Orientación y alineación de las etiquetas
    labelsDisplay: {
        list: {
            display: 'flex',
            flexDirection: 'column'
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        grid3: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
        },
        grid4: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
        grid6: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
        },
    },
    // Orientación y alineación de cada contenedor de etiqueta
    labelsList: {
        default: {
            alignItems: 'center',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
        }
    },
    // Apariencia de la caja de la etiqueta
    legendBox: {
        circle: {
            borderWidth: '2px',
            borderRadius: '50%',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        },
        rounded: {
            borderWidth: '2px',
            borderRadius: '25%',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        },
        square: {
            borderWidth: '2px',
            display: 'inline-block',
            flexShrink: 0,
            height: '1rem',
            width: '1rem',
        }
    }
}