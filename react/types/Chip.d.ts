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
     * @default 'text-current'
     */
    fillTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
     */
    fillTextMaterial?: string;
    /**
     *
     * @default 'bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10'
     */
    fillBgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    fillBgMaterial?: string;
    /**
     *
     * @default 'text-current'
     */
    outlineTextIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
     */
    outlineTextMaterial?: string;
    /**
     *
     * @default 'border-black border-opacity-20 dark:border-white dark:border-opacity-20'
     */
    outlineBorderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    outlineBorderMaterial?: string;
  };
  /**
   * Content of the chip media area (e.g. icon)
   */
  media?: React.ReactNode;
  /**
   * Defines whether the Chip has additional "delete" button or not
   *
   * @default false
   */
  deleteButton?: boolean;
  /**
   * Makes chip outline
   *
   * @default false
   */
  outline?: boolean;
  /**
   * Event will be triggered on Chip delete button click
   */
  onDelete?: (e: any) => void;
}


interface ChipProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ChipProps extends Props {}

declare const Chip: React.FunctionComponent<ChipProps>;

export default Chip;