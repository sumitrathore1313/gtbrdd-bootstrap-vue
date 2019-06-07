<template>
  <div id="form-stepper">
    <b-card>
      <div slot="header">
        <FormStepperHeader :steps="steps"> </FormStepperHeader>
      </div>
      <div v-for="step in steps" :key="step.id">
        <slot
          v-if="!$scopedSlots[`${step.id}`]"
          name="body"
          :step="step"
          :currentStep="currentStep"
        >
        </slot>
        <slot
          :name="`${step.id}`"
          :step="step"
          :currentStep="currentStep"
        >
        </slot>
      </div>
      <div slot="footer">
        <FormStepperFooter> </FormStepperFooter>
      </div>
    </b-card>
  </div>
</template>

<script>
import FormStepperHeader from './FormStepperHeader.vue'
import FormStepperFooter from './FormStepperFooter.vue'
import { BCard } from '../card'

export default {
  name: 'FormStepper',
  components: {
    FormStepperHeader,
    FormStepperFooter,
    BCard
  },
  props: {
    steps: {
      type: Array,
      default: function() {
        return [
          {
            id: 'step-1',
            icon: 'mail',
            name: 'first',
            title: 'Sample title 1',
            subtitle: 'Subtitle sample'
          },
          {
            id: 'step-2',
            icon: 'report_problem',
            name: 'second',
            title: 'Sample title 2',
            subtitle: 'Subtitle sample'
          }
        ]
      }
    }
  },
  data() {
    return {
      currentStep: null
    }
  }
}
</script>

<style scoped>
</style>
