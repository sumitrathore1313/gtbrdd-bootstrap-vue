import Vue from '../../utils/vue'
import { mergeData } from 'vue-functional-data-merge'
import copyProps from '../../utils/copy-props'
import FromStepperMixin from '../../mixins/form-stepper'

export const props = {
  ...copyProps(FromStepperMixin.props)
}

// @vue/component
export default Vue.extend({
  name: 'BFormStepperHeader',
  functional: true,
  props,
  render(h, { props, data, children }) {
    return h(
      'div',
      mergeData(data, {
        staticClass: 'form-stepper-header'
      }),
      children
    )
  }
})
