import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'label'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
     */
    borderIos?: string;
    /**
     *
     * @default 'border-md-light-outline dark:border-md-dark-outline'
     */
    borderMaterial?: string;
    /**
     *
     * @default 'bg-primary'
     */
    bgCheckedIos?: string;
    /**
     *
     * @default 'bg-md-light-primary dark:bg-md-dark-primary'
     */
    bgCheckedMaterial?: string;
    /**
     *
     * @default 'border-primary'
     */
    borderCheckedIos?: string;
    /**
     *
     * @default 'border-md-light-primary dark:border-md-dark-primary'
     */
    borderCheckedMaterial?: string;
  };
  /**
   * Defines whether the checkbox input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */

  /**
   * Defines whether the checkbox input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Defines whether the checkbox input is in indeterminate state or not
   *
   * @default false
   */
  indeterminate?: boolean;
  /**
   * Checkbox input name
   */
  name?: string;
  /**
   * Checkbox input value
   */
  value?: any;
  /**
   * Defines whether the checkbox input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the checkbox input is readonly
   *
   * @default false
   */
  readonly?: boolean;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
  /**
   * Event will be triggered when checkbox state changed
   */
  onChange?: (e: any) => void;
}


interface CheckboxProps {}
interface CheckboxProps extends Props {}

declare class Checkbox extends SvelteComponent<
  CheckboxProps & HTMLAttributes<HTMLLabelElement>,
  {  },
  {
    'default': {};
  }
> {}

export default Checkbox;