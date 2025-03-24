<template>
  <img :style="styleProps" class="l-image-component" @click.prevent="handleClick" :src="imageSrc" :draggable="false" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { transformToComponentProps, isEditingProp, componentsDefaultProps } from '../../defaultProps'
import useStylePick from '@/hooks/useStylePick'
import useComponentClick from '@/hooks/useComponentClick'
const defaultProps = transformToComponentProps(componentsDefaultProps['l-image'].props, isEditingProp)

// array that contains style props
export default defineComponent({
  name: 'l-image',
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
.l-image-component {
  max-width: 100%;
}
</style>
