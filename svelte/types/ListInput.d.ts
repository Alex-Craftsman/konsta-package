import { SvelteComponent } from 'svelte';
import { HTMLAttributes } from 'svelte/elements';

export interface Props {
  class?: string;
  /**
   * Component's HTML Element
   *
   * @default 'li'
   */
  component?: string;
  /**
   * Object with Tailwind CSS colors classes
   * */
  colors?: {
    /**
     *
     * @default ''
     */
    bgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface-variant dark:bg-md-dark-surface-variant'
     */
    bgMaterial?: string;
    /**
     *
     * @default 'border-black border-opacity-30 dark:border-white dark:border-opacity-30'
     */
    outlineBorderIos?: string;
    /**
     *
     * @default 'border-primary'
     */
    outlineBorderFocusIos?: string;
    /**
     *
     * @default 'border-md-light-on-surface dark:border-md-dark-on-surface'
     */
    outlineBorderMaterial?: string;
    /**
     *
     * @default 'border-md-light-primary dark:border-md-dark-primary'
     */
    outlineBorderFocusMaterial?: string;
    /**
     *
     * @default 'bg-ios-light-surface-1 dark:bg-ios-dark-surface-1'
     */
    outlineLabelBgIos?: string;
    /**
     *
     * @default 'bg-md-light-surface dark:bg-md-dark-surface'
     */
    outlineLabelBgMaterial?: string;
    /**
     *
     * @default ''
     */
    labelTextIos?: string;
    /**
     *
     * @default ''
     */
    labelTextFocusIos?: string;
    /**
     *
     * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
     */
    labelTextMaterial?: string;
    /**
     *
     * @default 'text-md-light-primary dark:text-md-dark-primary'
     */
    labelTextFocusMaterial?: string;
    /**
     *
     * @default 'text-red-500'
     */
    errorText?: string;
    /**
     *
     * @default 'border-red-500'
     */
    errorBorder?: string;
  };
  /**
   * Label content
   */
  label?: string
  /**
   * Renders outline-style input (with border around), overwrites `outlineIos` and `outlineMaterial`
   *
   * @default undefined
   */
  outline?: boolean;
  /**
   * Renders outline-style input (with border around) in iOS theme
   *
   * @default false
   */
  outlineIos?: boolean;
  /**
   * Renders outline-style input (with border around) in Material theme
   *
   * @default false
   */
  outlineMaterial?: boolean;
  /**
   * Makes floating label
   *
   * @default false
   */
  floatingLabel?: boolean;
  /**
   * Content of the list item "media" area (e.g. icon)
   */
  media?: string
  /**
   * Custom input element
   */

  /**
   * Content of the input "info"
   */
  info?: string
  /**
   * Content of the input "error"
   */
  error?: string | boolean
  /**
   * Adds input clear button
   *
   * @default false
   */
  clearButton?: boolean;
  /**
   * Renders additional dropdown icon (useful to use with `select` inputs)
   *
   * @default false
   */
  dropdown?: boolean;
  /**
   * Input id attribute
   */
  inputId?: string;
  /**
   * Additional input classes
   */
  inputStyle?: React.CSSProperties;
  /**
   * Additional input styles
   */
  inputClass?: string;

  /**
   * Input name
   */
  name?: string;
  /**
   * Input value
   */
  value?: any;
  /**
   * Input value, in case of uncontrolled component
   */

  /**
   * Input type
   *
   * @default 'text'
   */
  type?: string;
  /**
   * Value of input's native "inputmode" attribute
   */
  inputmode?: string;
  /**
   * Marks input as readonly
   */
  readonly?: boolean;
  /**
   * Marks input as required
   */
  required?: boolean;
  /**
   * Marks input as disabled
   */
  disabled?: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string | number;
  /**
   * Value of input's native "size" attribute
   */
  size?: string | number;
  /**
   * Value of input's native "accept" attribute
   */
  accept?: string | number;
  /**
   * Value of input's native "autocomplete" attribute
   */
  autocomplete?: string;
  /**
   * Value of input's native "autocorrect" attribute
   */
  autocorrect?: string;
  /**
   * Value of input's native "autocapitalize" attribute
   */
  autocapitalize?: string;
  /**
   * Value of input's native "spellcheck" attribute
   */
  spellcheck?: string;
  /**
   * Value of input's native "autofocus" attribute
   */
  autofocus?: boolean;
  /**
   * Value of input's native "autosave" attribute
   */
  autosave?: string;
  /**
   * Value of input's native "max" attribute
   */
  max?: string | number;
  /**
   * Value of input's native "min" attribute
   */
  min?: string | number;
  /**
   * Value of input's native "step" attribute
   */
  step?: string | number;
  /**
   * Value of input's native "maxlength" attribute
   */
  maxlength?: string | number;
  /**
   * Value of input's native "minlength" attribute
   */
  minlength?: string | number;
  /**
   * Value of input's native "multiple" attribute
   */
  multiple?: boolean;
  /**
   * Value of input's native "pattern" attribute
   */
  pattern?: string;
  /**
   * Value of input's native "tabindex" attribute
   */
  tabindex?: string | number;
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
  /**
   * `clear` event handler
   */
  onClear?: (e: any) => void;
}


interface ListInputProps {}
interface ListInputProps extends Props {}

declare class ListInput extends SvelteComponent<
  ListInputProps & HTMLAttributes<HTMLLIElement>,
  {  },
  {
    'default': {};
    'label': {};
    'media': {};
    'input': {};
    'info': {};
    'error': {};
  }
> {}

export default ListInput;