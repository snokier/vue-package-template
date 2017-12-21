import Package from './components/Package.vue'

export { Package }

export default {
  install (Vue) {
    Vue.component(Package.name, Package)
  },
}
