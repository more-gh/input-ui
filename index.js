import dengInput from 'src/cmps/input/index.vue'

const cmps = [
    dengInput
]

const install = vue => {
    cmps.map(cmp => {
        vue.component(cmp.name, cmp)
    })
}
if(window && window.Vue) install(window.Vue)

export default {
    install,
    dengInput
}