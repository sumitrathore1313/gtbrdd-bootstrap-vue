/* Form Stepper
 *

 */

// @vue/component
export default {
  props: {
    steps: {
      type: Array,
      default: function() {
        return [
          {
            icon: 'mail',
            name: 'first',
            title: 'Sample title 1',
            subtitle: 'Subtitle sample'
          },
          {
            icon: 'report_problem',
            name: 'second',
            title: 'Sample title 2',
            subtitle: 'Subtitle sample'
          }
        ]
      }
    },
    keepAlive: {
      type: Boolean,
      default: true
    },
    reset: {
      type: Boolean,
      default: false
    }
  }
}
