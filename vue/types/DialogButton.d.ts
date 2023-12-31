import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const DialogButton: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'button';
    };

    /**
     * Makes button bold in iOS theme and fill in Material theme, overwrites `strongIos` and `strongMaterial`
     */
    strong: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button bold in iOS theme
     */
    strongIos: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button fill in Material theme
     */
    strongMaterial: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes button disabled
     */
    disabled: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         * Active/pressed state bg color in iOS theme
         *
         * @default 'active:bg-black active:bg-opacity-10 dark:active:bg-white dark:active:bg-opacity-10'
         */
        activeBgIos?: string;
        /**
         * Text color in iOS theme
         *
         * @default ''text-primary
         */
        textIos?: string;
        /**
         * Disabled button text color in iOS theme
         *
         * @default 'text-black text-opacity-30 dark:text-white dark:text-opacity-30'
         */
        disabledTextIos?: string;
      
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
     * DialogButton click handler
     */
    click: (e: any) => void;
    
  }
>;

export default DialogButton;