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
     * @default 'bg-black bg-opacity-15 dark:bg-white dark:bg-opacity-15'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'bg-black dark:bg-white'
     */
    dotBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    dotBgMaterial?: string;
  };
}


interface BreadcrumbsCollapsedProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface BreadcrumbsCollapsedProps extends Props {}

declare const BreadcrumbsCollapsed: React.FunctionComponent<BreadcrumbsCollapsedProps>;

export default BreadcrumbsCollapsed;