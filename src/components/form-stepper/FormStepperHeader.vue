<template>
  <div id="form-stepper-header">
    <b-nav fill>
      <b-nav-item v-for="step in steps" :key="step.id">
        <p class="title">
          <span class="icon p-3 rounded-circle">
            <i :class="'fas fa-'+step.icon"></i>
          </span>
        </p>
        <p class="heading">{{ step.title }}</p>
      </b-nav-item>
    </b-nav>
    <b-progress :value="currentStep" :max="steps.length" show-progress animated></b-progress>
  </div>
</template>

<script>
import { BProgress } from '../progress/index.js'
import { BNav, BNavItem } from '../nav'
export default {
  name: 'FormStepperHeader',
  components: {
    BProgress,
    BNav,
    BNavItem
  },
  props: {
    steps: {
      type: Array
    },
    currentStep: {
      type: Number
    }
  }
}
</script>

<style scoped>
</style>
