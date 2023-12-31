import * as React from 'react';

export interface Props {
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
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ListButtonProps extends Props {}

declare const ListButton: React.FunctionComponent<ListButtonProps>;

export default ListButton;