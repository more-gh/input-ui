import Input from 'src/cmps/input/index.js'
import Toast from 'src/cmps/toast/index.js'
import Button from 'src/cmps/button/index.js'

const cmps = [
    Input,
    Toast,
    Button
]

const install = vue => {
    cmps.map(cmp => {
        vue.component(cmp.name, cmp)
    })
}
if(window && window.Vue) install(window.Vue)

export default {
    install,
    Input,
    Toast,
    Button
}