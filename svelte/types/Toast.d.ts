import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'bg-black'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-5 dark:bg-md-dark-surface-5'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };
  /**
   * Makes Toast background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;
  /**
   * Toast button content
   */

  /**
   * Toast position (only on wide screens). Can be `left`, `center` or `right`
   *
   * @default 'left'
   */
  position?: 'left' | 'center' | 'right';
  /**
   * Allows to open/close Toast and set its initial state
   *
   * @default false
   */
  opened?: boolean;
}


interface ToastProps {}
interface ToastProps extends Props {}

declare class Toast extends SvelteComponent<
  ToastProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
    'button': {};
  }
> {}

export default Toast;