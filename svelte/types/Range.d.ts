import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
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
     * @default 'bg-primary'
     */
    valueBgIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    valueBgMaterial?: string;
    /**
     *
     * @default 'range-thumb:bg-white'
     */
    thumbBgIos?: string;
    /**
     *
     * @default 'range-thumb:bg-md-light-primary dark:range-thumb:bg-md-dark-primary'
     */
    thumbBgMaterial?: string;
  };

  /**
   * Range input id attribute
   */
  inputId?: string;
  /**
   * Range input name
   */
  name?: string;
  /**
   * Range value
   */
  value?: any;
  /**
   * Range value, in case of uncontrolled component
   */

  /**
   * Defines whether the range input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the range input is readonly
   *
   * @default false
   */
  readonly?: boolean;
  /**
   * Range step
   *
   * @default 1
   */
  step?: number;
  /**
   * Range min value
   *
   * @default 0
   */
  min?: number;
  /**
   * Range max value
   *
   * @default 100
   */
  max?: number;
  /**
   * `input` event handler
   */
  onInput?: (e: any) => void;
  /**
   * `change` event handler
   */
  onChange?: (e: any) => void;
  /**
   * `focus` event handler
   */
  onFocus?: (e: any) => void;
  /**
   * `blur` event handler
   */
  onBlur?: (e: any) => void;
}


interface RangeProps {}
interface RangeProps extends Props {}

declare class Range extends SvelteComponent<
  RangeProps & HTMLAttributes<HTMLDivElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Range;