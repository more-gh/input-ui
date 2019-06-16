import dengInput from 'src/cmps/input/index.vue'

const cmps = [
    dengInput
]

const useCmps = vue => {
    cmps.map(cmp => {
        vue.component(cmp.name, cmp)
    })
}
if(window && window.Vue) useCmps(window.Vue)

export default {
    dengInput
}