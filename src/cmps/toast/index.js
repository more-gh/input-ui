import Toast from './index.vue'
Toast.intall = function (vue) {
    vue.component(Toast.name, Toast)
}
export default Toast