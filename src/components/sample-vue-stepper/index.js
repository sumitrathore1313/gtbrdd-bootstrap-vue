import BFormStepper from './form-stepper'
import { installFactory } from '../../utils/plugins'

const components = {
  BFormStepper
}

export { BFormStepper }

export default {
  install: installFactory({ components })
}
