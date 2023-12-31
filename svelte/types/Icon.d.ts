import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'i'
   */
  component?: string;

  /**
   * Icon badge
   * */
  badge?: string | number

  /**
   * Icon to render in "ios" theme
   * */


  /**
   * Icon to render in "material" theme
   * */


  /**
   * Badge colors. Object with Tailwind CSS colors classes
   * */
  badgeColors?: {
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
}


interface IconProps {}
interface IconProps extends Props {}

declare class Icon extends SvelteComponent<
  IconProps & HTMLAttributes<HTMLElement>,
  {  },
  {
    'default': {};
    'badge': {};
    'ios': {};
    'material': {};
  }
> {}

export default Icon;