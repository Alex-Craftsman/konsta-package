import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-primary'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
    /**
     *
     * @default 'active:bg-primary active:bg-opacity-15'
     */
    activeBgIos?: string;
    /**
     *
     * @default ''
     */
    activeBgMaterial?: string;
    /**
     *
     * @default 'touch-ripple-primary'
     */
    touchRipple?: string;
  };
  /**
   * Button's link `href` attribute
   */
  href?: string;
  /**
   * Button's link `target` attribute
   */
  target?: string;
  /**
   * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
   *
   * @default undefined
   */
  type?: string;
  /**
   * Button's `type` attribute (if rendered as `<button>` with `linkComponent: 'button'`)
   */
  value?: any;
  /**
   * Button HTML Element
   *
   * @default 'a'
   * */
  linkComponent?: string;
  /**
   * Object with additional props (attributes) to pass to the Link/Button
   */
  linkProps?: any;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
}


interface ListButtonProps {}
interface ListButtonProps extends Props {}

declare class ListButton extends SvelteComponent<
  ListButtonProps & HTMLAttributes<HTMLLIElement>,
  {  },
  {
    'default': {};
  }
> {}

export default ListButton;