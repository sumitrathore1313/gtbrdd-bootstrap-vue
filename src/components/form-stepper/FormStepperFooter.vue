<template>
  <div id="form-stepper-footer">
    <div>
      <span class="text-left">
        <b-button variant="primary">{{ lang.next }}</b-button>
      </span>
      <span class="text-right">
        <b-button variant="secondary">{{ lang.previous }}</b-button>
      </span>
    </div>
  </div>
</template>

<script>
import { BButton } from '../button'
export default {
  name: 'FormStepperFooter',
  components: {
    BButton
  },
  props: {
    lang: {
      type: Object,
      default: function() {
        return {
          next: 'Next',
          previous: 'Previous'
        }
      }
    }
  }
}
</script>

<style scoped>
</style>
