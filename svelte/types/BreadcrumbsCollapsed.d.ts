import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  onClick?: (e: any) => void;

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
interface BreadcrumbsCollapsedProps extends Props {}

declare class BreadcrumbsCollapsed extends SvelteComponent<
  BreadcrumbsCollapsedProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default BreadcrumbsCollapsed;