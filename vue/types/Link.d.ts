import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const Link: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Should be enabled if Link is in the Navbar
     */
    navbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Should be enabled if Link is in the Toolbar
     */
    toolbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enable if Link doesn't contain anything except icon
     */
    iconOnly: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Should be enabled if Link is in the Tabbar
     */
    tabbar: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Highlights Tabbar Link as currently active
     */
    tabbarActive: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Object with additional props (attributes) to pass to the Link/Button
     */
    linkProps: {
      type: any;
      
    };

    /**
     * Enables touch ripple effect in Material theme. If not specified, enabled by default if link is `toolbar`, `tabbar` or `navbar`
     */
    touchRipple: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Object with Tailwind CSS colors classes
     */
    colors: {
      type: PropType<{
    
        /**
         *
         * @default 'text-primary'
         */
        textIos?: string;
        /**
         *
         * @default 'text-md-light-primary dark:text-md-dark-primary'
         */
        textMaterial?: string;
        /**
         *
         * @default 'text-primary'
         */
        navbarTextIos?: string;
        /**
         *
         * @default ''
         */
        navbarTextMaterial?: string;
      
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
     * Click handler
     */
    click: (e: any) => void;
    
  }
>;

export default Link;