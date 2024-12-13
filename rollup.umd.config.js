import baseConfig, { file } from './rollup.config'

export default {
  ...baseConfig,
  output: {
    name: 'jschenComponents',
    file: file('umd'),
    format: "umd",
    globals: {
      'vue': 'Vue',
      'lodash-es': '_'
    },
    exports: 'named'
  }
}
