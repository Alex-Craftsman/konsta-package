import * as React from 'react';

export interface Props {
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
     * @default 'text-primary'
     */
    iconIos?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    iconMaterial?: string;
  };
  /**
   * Tailwind CSS size classes
   *
   * @default 'w-8 h-8'
   * */
  size?: string;
}


interface PreloaderProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface PreloaderProps extends Props {}

declare const Preloader: React.FunctionComponent<PreloaderProps>;

export default Preloader;