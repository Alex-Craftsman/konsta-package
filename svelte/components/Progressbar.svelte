<script>
  import { ProgressbarClasses } from '../../shared/esm/classes/ProgressbarClasses.js';
  import { ProgressbarColors } from '../../shared/esm/colors/ProgressbarColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let progress = 0;

  const dark = useDarkClasses();

  $: colors = ProgressbarColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    ProgressbarClasses(colors),
    className,
    (v) => (c = v)
  );
</script>

<span class={c.base} {...$$restProps}>
  <span
    class={c.inner}
    style={`transform: translateX(-${100 - (progress / 1) * 100}%)`}
  />
  <slot />
</span>
