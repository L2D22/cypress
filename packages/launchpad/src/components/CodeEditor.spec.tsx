import { get } from 'lodash'
import { ref } from 'vue'
import CodeEditor from './CodeEditor.vue'
import Input from './Input/Input.vue'

it('renders', () => {
  const myCode = ref('console.log("I LOVE formatted code.")')

  cy.mount(() => (<div><CodeEditor
    class="font-mono p-4" 
    data-testid="code-editor"
    modelValue={ myCode }
  onUpdate:modelValue={ (val) => {
      myCode.value = val
    } } /></div>))
    .get('[data-testid=code-editor] textarea').clear().type(`const four = 2 + 2;`, { delay: 0 })
})


