import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'

export default {
    input: 'src/components/carousels/carousels.js',
    output: {
        file: 'src/components/carousels/carousels.js',
        format: 'cjs'
    },
    plugins: [ buble(), uglify() ],
    external: ['react', 'react-dom', 'prop-types']
}