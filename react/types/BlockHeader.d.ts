import * as React from 'react';

export interface Props {
  /**
   * Component's HTML Element
   *
   * @default 'div'
   */
  component?: string;

  /**
   * Makes block header inset, overwrites `insetIos` and `insetMaterial`
   *
   * @default undefined
   */
  inset?: boolean;

  /**
   * Makes block header inset in iOS theme
   *
   * @default false
   */
  insetIos?: boolean;

  /**
   * Makes block header inset in Material theme
   *
   * @default false
   */
  insetMaterial?: boolean;

  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'text-black dark:text-white'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    textMaterial?: string;
  };
}


interface BlockHeaderProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface BlockHeaderProps extends Props {}

declare const BlockHeader: React.FunctionComponent<BlockHeaderProps>;

export default BlockHeader;