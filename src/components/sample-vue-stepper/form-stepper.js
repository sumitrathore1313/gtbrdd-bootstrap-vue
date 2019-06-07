import Vue from '../../utils/vue'
import { mergeData } from 'vue-functional-data-merge'
import copyProps from '../../utils/copy-props'
import FromStepperMixin from '../../mixins/form-stepper'
import pluckProps from '../../utils/pluck-props'
import { normalizeSlot } from '../../utils/normalize-slot'
import BFormStepperHeader, { props as headerProps } from './form-stepper-header'
import BFormStepperBody, { props as bodyProps } from './form-stepper-body'
import BFormStepperFooter, { props as footerProps } from './form-stepper-footer'

export const props = {
  ...copyProps(FromStepperMixin.props),
  header: {
    type: Boolean,
    default: true
  },
  footer: {
    type: Boolean,
    default: true
  }
}

// @vue/component
export default Vue.extend({
  name: 'BFormStepper',
  functional: true,
  props,
  render(h, { props, data, slots, scopedSlots }) {
    const $slots = slots()
    // Vue < 2.6.x may return undefined for scopedSlots
    const $scopedSlots = scopedSlots || {}

    // Create placeholder elements for each section

    let header = h(false)
    let content = h(false)
    let footer = h(false)

    if (props.header) {
      header = h(
        BFormStepperHeader,
        { props: pluckProps(headerProps, props) },
        normalizeSlot('header', {}, $scopedSlots, $slots)
      )
    }

    content = normalizeSlot('default', {}, $scopedSlots, $slots) || []
    // Wrap content in card-body
    content = [h(BFormStepperBody, { props: pluckProps(bodyProps, props) }, [...content])]

    if (props.footer) {
      footer = h(
        BFormStepperFooter,
        {
          props: pluckProps(footerProps, props)
        },
        normalizeSlot('footer', {}, $scopedSlots, $slots)
      )
    }
    return h(
      'div',
      mergeData(data, {
        staticClass: 'form-stepper'
      }),
      [header, content, footer]
    )
  }
})
