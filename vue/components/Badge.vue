<template>
  <component :is="component" :class="c.base[size]">
    <slot />
  </component>
</template>
<script>
  import { computed } from 'vue';
  import { BadgeClasses } from '../../shared/esm/classes/BadgeClasses.js';
  import { BadgeColors } from '../../shared/esm/colors/BadgeColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';

  export default {
    name: 'k-badge',
    props: {
      component: {
        type: String,
        default: 'span',
      },
      small: {
        type: Boolean,
        default: false,
      },
      colors: {
        type: Object,
      },
      ios: {
        type: Boolean,
        default: undefined,
      },
      material: {
        type: Boolean,
        default: undefined,
      },
    },
    setup(props) {
      const colors = computed(() => BadgeColors(props.colors || {}));

      const size = computed(() => (props.small ? 'sm' : 'md'));

      const c = useThemeClasses(props, () => BadgeClasses(props, colors.value));

      return {
        c,
        size,
      };
    },
  };
</script>
