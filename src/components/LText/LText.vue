<template>
  <component :is="tag" :style="styleProps" class="l-text-component" @click.prevent="handleClick">
    {{ text }}
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useStylePick from '@/hooks/useStylePick'
import useComponentClick from '@/hooks/useComponentClick'
import componentsDefaultProps, { transformToComponentProps, isEditingProp } from '../../defaultProps'
const extraProps = {
  tag: {
    type: String,
    default: 'p'
  },
  ...isEditingProp
}
const defaultProps = transformToComponentProps(componentsDefaultProps['l-text'].props, extraProps)
// array that contains style props
export default defineComponent({
  name: 'l-text',
  props: {
    ...defaultProps
  },
  setup(props) {
    const styleProps = useStylePick(props)
    const handleClick = useComponentClick(props)
    return {
      styleProps,
      handleClick
    }
  }
})
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}

button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}

.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>