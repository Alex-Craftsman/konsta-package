import * as React from 'react';

export interface Props {
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
   * Defines whether the radio input is checked or not, for the case if it is uncontrolled component
   *
   * @default false
   */
  defaultChecked?: boolean;
  /**
   * Defines whether the radio input is checked or not
   *
   * @default false
   */
  checked?: boolean;
  /**
   * Radio input name
   */
  name?: string;
  /**
   * Radio input value
   */
  value?: any;
  /**
   * Defines whether the radio input is disabled
   *
   * @default false
   */
  disabled?: boolean;
  /**
   * Defines whether the radio input is readonly
   *
   * @default false
   */
  readOnly?: boolean;
  /**
   * Enables touch ripple effect in Material theme
   *
   * @default true
   */
  touchRipple?: boolean;
  /**
   * Event will be triggered when radio state changed
   */
  onChange?: (e: any) => void;
}


interface RadioProps {}
export interface Props extends Omit<React.HTMLAttributes<HTMLElement>, keyof Props> {}

interface RadioProps extends Props {}

declare const Radio: React.FunctionComponent<RadioProps>;

export default Radio;