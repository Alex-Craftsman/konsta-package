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
     * Dialog bg color in iOS theme
     *
     * @default 'bg-white dark:bg-neutral-800'
     */
    bgIos?: string;
    /**
     * Dialog bg color in iOS theme
     *
     * @default 'bg-md-light-surface-3 dark:bg-md-dark-surface-3'
     */
    bgMaterial?: string;
    /**
     * Title text color in iOS theme
     *
     * @default ''
     */
    titleIos?: string;
    /**
     * Title text color in Material theme
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    titleMaterial?: string;
    /**
     * Content text color in iOS theme
     *
     * @default ''
     */
    contentTextIos?: string;
    /**
     * Content text color in Material theme
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    contentTextMaterial?: string;
  };
  /**
   * Tailwind CSS size classes for iOS theme
   *
   * @default 'w-[16.875rem]'
   * */
  sizeIos?: string;
  /**
   * Tailwind CSS size classes for Material theme
   *
   * @default 'w-[19.5rem]'
   * */
  sizeMaterial?: string;

  /**
   * Tailwind CSS classes for title font size iOS theme
   *
   * @default 'text-[18px]'
   * */
  titleFontSizeIos?: string;
  /**
   * Tailwind CSS classes for title font size Material theme
   *
   * @default 'text-[24px]'
   * */
  titleFontSizeMaterial?: string;
  /**
   * Makes Dialog background translucent (with `backdrop-filter: blur`) in iOS theme
   *
   * @default true
   */
  translucent?: boolean;

  /**
   * Dialog title content
   */
  title?: string | number | React.ReactNode;
  /**
   * Dialog main content
   */
  content?: string | number | React.ReactNode;
  /**
   * Dialog buttons content
   */
  buttons?: string | number | React.ReactNode;

  /**
   * Allows to open/close Popup and set its initial state
   *
   * @default false
   */
  opened?: boolean;
  /**
   * Enables Popup backdrop (dark semi transparent layer behind)
   *
   * @default true
   */
  backdrop?: boolean;
  /**
   * Click handler on backdrop element
   */
  onBackdropClick?: (e: any) => void;
}


interface DialogProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface DialogProps extends Props {}

declare const Dialog: React.FunctionComponent<DialogProps>;

export default Dialog;