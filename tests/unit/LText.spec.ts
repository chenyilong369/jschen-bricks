import LText from "@/components/LText"
import { textDefaultProps } from "@/defaultProps"
import { shallowMount } from "@vue/test-utils"

describe('LText.vue', () => {
  const {location} = window
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: {
        href: ''
      }
    })
  })
  afterEach(() => {
    window.location = location
  })
  it('default LText Render', () => {
    const msg = 'test'
    const props = {
      ...textDefaultProps,
      text: msg
    }
    const wrapper = shallowMount(LText, {props})
    expect(wrapper.text()).toBe(msg)
    expect(wrapper.element.tagName).toBe('DIV')
    const style = wrapper.attributes().style
    expect(style.includes('font-size')).toBeTruthy()
    expect(style.includes('actionType')).toBeFalsy()
  })

  it('Ltext with actionType and URL should trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://baidu.com',
      tag: 'h2'
    }
    const wrapper = shallowMount(LText, {props})
    await wrapper.trigger('click')
    expect(window.location.href).toBe('https://baidu.com')
  })

  it('Ltext with actionType in Editing and URL should not trigger location href change', async () => {
    const props = {
      ...textDefaultProps,
      actionType: 'url',
      url: 'https://baidu.com',
      tag: 'h2',
      isEditing: true
    }
    const wrapper = shallowMount(LText, {props})
    await wrapper.trigger('click')
    expect(window.location.href).not.toBe('https://baidu.com')
  })
})