import Vue from 'vue'
import App from "./App.vue";

import inputUi from '../index'

Vue.use(inputUi)

new Vue({
    el: "#app",
    render: h => h(App)
})