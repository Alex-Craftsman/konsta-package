<script>
  import { ToastClasses } from '../../shared/esm/classes/ToastClasses.js';
  import { ToastColors } from '../../shared/esm/colors/ToastColors.js';
  import { useThemeClasses } from '../shared/use-theme-classes.js';
  import { useDarkClasses } from '../shared/use-dark-classes.js';

  let className = undefined;
  export { className as class };
  let colorsProp = undefined;
  export { colorsProp as colors };
  export let ios = undefined;
  export let material = undefined;

  export let translucent = true;
  export let position = 'left';
  export let opened = false;

  const dark = useDarkClasses();

  $: colors = ToastColors(colorsProp, dark);

  $: c = useThemeClasses(
    { ios, material },
    ToastClasses({ opened, translucent }, colors, className),
    className,
    (v) => (c = v)
  );
</script>

<div class={c.base[position]} {...$$restProps}>
  <div class={c.content}>
    <slot />
    {#if $$slots.button}
      <div class={c.button}><slot name="button" /></div>
    {/if}
  </div>
</div>
