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
     * Badge bg color
     *
     * @default 'bg-primary'
     */
    bg?: string;
    /**
     * Badge text color
     *
     * @default 'text-white'
     */
    text?: string;
  };
  /**
   * Makes small badge
   */
  small?: boolean;
}


interface BadgeProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface BadgeProps extends Props {}

declare const Badge: React.FunctionComponent<BadgeProps>;

export default Badge;