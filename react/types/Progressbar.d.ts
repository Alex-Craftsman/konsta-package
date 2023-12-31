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
     * @default 'bg-primary'
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    bgMaterial?: string;
  };
  /**
   * Determinate progress (from 0 to 1)
   *
   * @default 0
   */
  progress?: number;
}


interface ProgressbarProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface ProgressbarProps extends Props {}

declare const Progressbar: React.FunctionComponent<ProgressbarProps>;

export default Progressbar;