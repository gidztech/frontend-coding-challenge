import { shallowMount } from '@vue/test-utils'
import CheckButton from '@/components/Survey/components/CheckButton'

const mountCheckButton = ({ text = 'Lorem ipsum', value = 'dummy-value', selected = false } = {}) => {
  return shallowMount(CheckButton, {
    propsData: {
      text,
      value,
      selected
    }
  })
}

describe('CheckButton', () => {
  it('should exist as a component', () => {
    const wrapper = mountCheckButton()
    expect(wrapper.exists()).toBe(true)
  })

  it('should render the text value passed as prop correctly', () => {
    const wrapper = mountCheckButton({ text: 'Lorem ipsum' })
    expect(wrapper.text()).toContain('Lorem ipsum')
  })

  it('should not attach the dynamic "check-button--selected" class when the selected prop is set to false', () => {
    const wrapper = mountCheckButton({ selected: false })
    expect(wrapper.classes()).not.toContain('check-button--selected')
  })

  it('should attach the dynamic "check-button--selected" class when the selected prop is set to true', () => {
    const wrapper = mountCheckButton({ selected: true })
    expect(wrapper.classes()).toContain('check-button--selected')
  })

  it('should emit change event with selected state when unselected button is clicked', () => {
    const wrapper = mountCheckButton({ selected: false, value: 'dummy-value' })
    wrapper.find(`[data-automation="check-button-dummy-value"]`).trigger('click')
    expect(wrapper.emitted().change).toHaveLength(1)
    expect(wrapper.emitted().change[0]).toEqual([{ 'selected': true, 'value': 'dummy-value' }])
  })

  it('should emit change event with unselected state when selected button is clicked', () => {
    const wrapper = mountCheckButton({ selected: true, value: 'dummy-value' })
    wrapper.find(`[data-automation="check-button-dummy-value"]`).trigger('click')
    expect(wrapper.emitted().change).toHaveLength(1)
    expect(wrapper.emitted().change[0]).toEqual([{ 'selected': false, 'value': 'dummy-value' }])
  })
})
