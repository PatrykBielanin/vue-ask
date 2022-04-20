import VuePlugin from 'rollup-plugin-vue'
import pkg from './package.json'

function createEntry(options) {
    const config = {
        input: './src/VueAsk.js',
        external: [
            'vue'
        ],
        output: {
            file: options.file,
            format: options.format,
            name: 'VueAsk',
            exports: 'default',
            globals: {
                vue: 'Vue'
            }
        },
        plugins: [
            VuePlugin({})
        ]
    }

    return config
}

export default [
    createEntry({ format: 'iife', file: pkg.browser }),
    createEntry({ format: 'es', file: pkg.module }),
    createEntry({ format: 'cjs', file: pkg.main })
]
