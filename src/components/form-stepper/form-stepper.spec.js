import { mount } from '@vue/test-utils'
import BFormStepper from './form-stepper'

describe('form-stepper', () => {
  it('has expected default structure', async () => {
    const wrapper = mount(BFormStepper)
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('group')
    expect(wrapper.text()).toBe('')
  })

  it('should render default slot', async () => {
    const wrapper = mount(BFormStepper, {
      slots: {
        default: '<span>foobar</span>'
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('group')
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.text()).toBe('foobar')
  })

  it('should apply vertical class', async () => {
    const wrapper = mount(BFormStepper, {
      propsData: {
        vertical: true
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).not.toContain('btn-group')
    expect(wrapper.classes().length).toBe(1)
  })

  it('should apply size class', async () => {
    const wrapper = mount(BFormStepper, {
      propsData: {
        size: 'sm'
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes()).toContain('btn-group-sm')
    expect(wrapper.classes().length).toBe(2)
  })

  it('should apply size class when vertical', async () => {
    const wrapper = mount(BFormStepper, {
      propsData: {
        size: 'sm',
        vertical: true
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group-sm')
    expect(wrapper.classes()).toContain('btn-group-vertical')
    expect(wrapper.classes()).not.toContain('btn-group')
    expect(wrapper.classes().length).toBe(2)
  })

  it('has custom role when aria-role prop set', async () => {
    const wrapper = mount(BFormStepper, {
      propsData: {
        ariaRole: 'foobar'
      }
    })
    expect(wrapper.is('div')).toBe(true)
    expect(wrapper.classes()).toContain('btn-group')
    expect(wrapper.classes().length).toBe(1)
    expect(wrapper.attributes('role')).toBeDefined()
    expect(wrapper.attributes('role')).toBe('foobar')
  })
})
