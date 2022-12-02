import * as generator from './components/generator.esc.js'
import * as readout from './components/readout.esc.js'
import * as header from './components/header.esc.js'

export const __attributes = {
    style: {
        padding: '25px',
    }
}

export const __children = {
    header: {
        text: 'Time Elapsed',
        __compose: header,
    },

    readout,

    generator
}

export const __listeners = {
    'readout.value': {
        'generator': true
    },
}