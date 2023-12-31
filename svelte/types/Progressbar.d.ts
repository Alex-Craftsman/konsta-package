import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'span'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'bg-primary'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    bgMaterial?: string;
  };
  /**
   * Determinate progress (from 0 to 1)
   *
   * @default 0
   */
  progress?: number;
}


interface ProgressbarProps {}
interface ProgressbarProps extends Props {}

declare class Progressbar extends SvelteComponent<
  ProgressbarProps & HTMLAttributes<HTMLSpanElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Progressbar;