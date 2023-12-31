import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

  /**
   * Component's HTML Element
   *
   * @default 'a'
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
     * @default 'bg-md-light-primary-container dark:bg-md-dark-primary-container'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'active:bg-ios-primary-shade'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-primary-container dark:text-md-dark-on-primary-container'
     */
    textMaterial?: string;
    /**
     *
     * @default 'touch-ripple-primary dark:touch-ripple-white'
     */
    touchRipple?: string;
  };
  /**
   * Fab's link `href` attribute
   */
  href?: string;
  /**
   * Button text (content)
   */
  text?: string
  /**
   * Text position, can be `after` icon or `before` icon
   *
   * @default 'after'
   */
  textPosition?: 'after' | 'before';
  /**
   * Fab's icon
   */

  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}


interface FabProps {}
interface FabProps extends Props {}

declare class Fab extends SvelteComponent<
  FabProps & HTMLAttributes<HTMLAnchorElement>,
  {  },
  {
    'default': {};
    'text': {};
    'icon': {};
  }
> {}

export default Fab;