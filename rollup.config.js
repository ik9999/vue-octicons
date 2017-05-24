const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')

export default {
  entry: 'src/index.js',
  external: [
    'vue',
    'octicons'
  ],
  globals: {
    vue: 'Vue',
    octicons: 'Octicons'
  },
  format: 'umd',
  moduleName: 'VueOcticons',
  dest: 'dist/vue-octicons.js',
  plugins: [
    vue({
      compileTemplate: true,
      css: true
    }),
    buble(),
    uglify()
  ]
}