import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Radio: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'label';
    };

    /**
     * Defines whether the radio input is checked or not, for the case if it is uncontrolled component
     */
    defaultChecked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the radio input is checked or not
     */
    checked: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Radio input name
     */
    name: {
      type: StringConstructor;
      
    };

    /**
     * Radio input value
     */
    value: {
      type: any;
      
    };

    /**
     * Defines whether the radio input is disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Defines whether the radio input is readonly
     */
    readonly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables touch ripple effect in Material theme
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
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
      
      }>;
      
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {
    
    /**
     * Event will be triggered when radio state changed
     */
    change: (e: any) => void;
    
  }
>;

export default Radio;