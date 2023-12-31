import * as React from 'react';

export interface Props {
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
     * @default 'bg-white dark:bg-neutral-800'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-3 dark:bg-md-dark-surface-3'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
     */
    textIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    textMaterial?: string;
  };

  /**
   * Button text font size in iOS theme
   *
   * @default 'text-sm'
   */
  fontSizeIos?: string;
  /**
   * Button text font size in Material theme
   *
   * @default 'text-sm'
   */
  fontSizeMaterial?: string;

  /**
   * Renders button outer hairlines (borders). If not specified, will be enabled in iOS theme
   *
   * @default undefined
   */
  dividers?: boolean;
}


interface ActionsLabelProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ActionsLabelProps extends Props {}

declare const ActionsLabel: React.FunctionComponent<ActionsLabelProps>;

export default ActionsLabel;