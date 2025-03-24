import { name } from './package.json'
import PluginVue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2';
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'

// function myExample() {
//   return {
//     name: "my-example",
//     buildStart(options) {
//       console.log('in options', options)
//     },
//     load(id) {
//       console.log('in load', id)
//       return null
//     },
//     transform(code, id) {
//       console.log('transform code', code)
//       console.log('transform id', id)
//       return null;
//     },
//     buildEnd(error) {
//       console.error(error)
//     }
//   }
// }

const file = (type) => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: { declaration: true },
  exclude: [
    'node_modules',
    'src/App.vue',
    'src/main.ts'
  ]
}

export {
  name,
  file
}

export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    PluginVue(), 
    css({ output: 'app.css' })
  ],
  external: ['vue']
}