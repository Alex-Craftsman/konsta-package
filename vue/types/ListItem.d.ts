import { ComponentOptionsMixin, DefineComponent, PropType, StyleValue, Ref } from 'vue';

declare const ListItem: DefineComponent<
  {
    
    /**
     * Component's HTML Element
     */
    component: {
      type: StringConstructor;
      default: 'li';
    };

    /**
     * Additional class to add on item "media" element
     */
    mediaClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on item "inner" element
     */
    innerClass: {
      type: StringConstructor;
      
    };

    /**
     * Additional class to add on item "content" element
     */
    contentClass: {
      type: StringConstructor;
      
    };

    /**
     * Tailwind CSS class for item title font size in iOS theme
     */
    titleFontSizeIos: {
      type: StringConstructor;
      default: 'text-[17px]';
    };

    /**
     * Tailwind CSS class for item title font size in Material theme
     */
    titleFontSizeMaterial: {
      type: StringConstructor;
      default: 'text-[16px]';
    };

    /**
     * Additional class to add on item "titleWrap" element
     */
    titleWrapClass: {
      type: StringConstructor;
      
    };

    /**
     * Content of the list item "title" area
     */
    title: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "subtitle" area
     */
    subtitle: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "text" area
     */
    text: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "after" area
     */
    after: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "header" area
     */
    header: {
      type: PropType<string | number>;
      
    };

    /**
     * Content of the list item "footer" area
     */
    footer: {
      type: PropType<string | number>;
      
    };

    /**
     * Renders list item as menu list item (same as `<MenuListItem>`)
     */
    menuListItem: {
      type: BooleanConstructor;
      
    };

    /**
     * Makes menu list item highlighted (active) (same as `<MenuListItem active>`)
     */
    menuListItemActive: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Renders dividers (borders) between list items. If not specified then inherits `dividers` prop value from parent List component
     */
    dividers: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Enables Contacts List by adding required additional classes for styling
     */
    contacts: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Renders it as a list group title
     */
    groupTitle: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Makes item title strong (bold). When `'auto'` it will make it strong if there is also `subtitle` or `text` specified
     */
    strongTitle: {
      type: PropType<boolean | 'auto'>;
      
    };

    /**
     * Renders item content as `<label>` element. Useful to create radio/checkbox list items
     */
    label: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * Enables chevron icon if list item is link. Overwrites `chevronIos` and `chevronMaterial`
     */
    chevron: {
      type: BooleanConstructor;
      default: undefined;
    };

    /**
     * Enables chevron icon if list item is link in iOS theme
     */
    chevronIos: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Enables chevron icon if list item is link in Material theme
     */
    chevronMaterial: {
      type: BooleanConstructor;
      default: true;
    };

    /**
     * Renders list item as link (`<a>`)
     */
    link: {
      type: BooleanConstructor;
      default: false;
    };

    /**
     * List item link HTML Element
     */
    linkComponent: {
      type: StringConstructor;
      default: 'a';
    };

    /**
     * Object with additional props (attributes) to pass to the Link/Button
     */
    linkProps: {
      type: any;
      
    };

    /**
     * List item link's `href` attribute
     */
    href: {
      type: PropType<boolean | string>;
      
    };

    /**
     * List item link's `target` attribute
     */
    target: {
      type: StringConstructor;
      
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
         * @default 'text-black dark:text-white'
         */
        primaryTextIos?: string;
        /**
         *
         * @default 'text-md-light-on-surface dark:text-md-dark-on-surface'
         */
        primaryTextMaterial?: string;
        /**
         *
         * @default 'text-black text-opacity-55 dark:text-white dark:text-opacity-55'
         */
        secondaryTextIos?: string;
        /**
         *
         * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
         */
        secondaryTextMaterial?: string;
        /**
         *
         * @default 'active:bg-black active:bg-opacity-10 dark:active:bg-white dark:active:bg-opacity-10'
         */
        activeBgIos?: string;
        /**
         *
         * @default ''
         */
        activeBgMaterial?: string;
        /**
         *
         * @default 'bg-ios-light-surface-variant dark:bg-ios-dark-surface-variant'
         */
        groupTitleBgIos?: string;
        /**
         *
         * @default 'bg-md-light-surface-2 dark:bg-md-dark-surface-2'
         */
        groupTitleBgMaterial?: string;
        /**
         *
         * @default 'text-black dark:text-white'
         */
        menuListItemTextIos?: string;
        /**
         *
         * @default 'text-md-light-on-surface-variant dark:text-md-dark-on-surface-variant'
         */
        menuListItemTextMaterial?: string;
        /**
         *
         * @default 'active:bg-black active:bg-opacity-10 dark:active:bg-white dark:active:bg-opacity-10'
         */
        menuListItemBgIos?: string;
        /**
         *
         * @default 'bg-md-light-surface-1 dark:bg-md-dark-surface-1'
         */
        menuListItemBgMaterial?: string;
        /**
         *
         * @default 'text-primary dark:text-white'
         */
        menuListItemActiveTextIos?: string;
        /**
         *
         * @default 'text-md-light-on-secondary-container dark:text-md-dark-on-secondary-container'
         */
        menuListItemActiveTextMaterial?: string;
        /**
         *
         * @default 'bg-primary bg-opacity-15 dark:bg-primary'
         */
        menuListItemActiveBgIos?: string;
        /**
         *
         * @default 'bg-md-light-secondary-container dark:bg-md-dark-secondary-container'
         */
        menuListItemActiveBgMaterial?: string;
    
        /**
         *
         * @default 'touch-ripple-black dark:touch-ripple-white'
         */
        touchRipple?: string;
        /**
         *
         * @default 'text-opacity-90 dark:text-opacity-90'
         */
        groupTitleСontactsTextIos?: string;
        /**
         *
         * @default 'text-md-light-primary dark:text-md-dark-primary'
         */
        groupTitleContactsTextMaterial?: string;
        /**
         *
         * @default 'dark:bg-[#323234]'
         */
        groupTitleContactsBgIos?: string;
        /**
         *
         * @default 'bg-transparent dark:bg-transparent'
         */
        groupTitleContactsBgMaterial?: string;
      
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
    
  }
>;

export default ListItem;