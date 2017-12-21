import Vue from 'vue'
import App from './App.vue'

import Package from '../src'
import '../src/styles/index.styl'

// import Package from '{{ name }}'
// import '{{ name }}/dist/index.css'

Vue.use(Package)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App),
})
