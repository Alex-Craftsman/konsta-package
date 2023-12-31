import { Ref, ComponentOptionsMixin, DefineComponent } from 'vue';
import kActions from './types/Actions';
import kActionsButton from './types/ActionsButton';
import kActionsGroup from './types/ActionsGroup';
import kActionsLabel from './types/ActionsLabel';
import kApp from './types/App';
import kBadge from './types/Badge';
import kBlock from './types/Block';
import kBlockFooter from './types/BlockFooter';
import kBlockHeader from './types/BlockHeader';
import kBlockTitle from './types/BlockTitle';
import kBreadcrumbs from './types/Breadcrumbs';
import kBreadcrumbsCollapsed from './types/BreadcrumbsCollapsed';
import kBreadcrumbsItem from './types/BreadcrumbsItem';
import kBreadcrumbsSeparator from './types/BreadcrumbsSeparator';
import kButton from './types/Button';
import kCard from './types/Card';
import kCheckbox from './types/Checkbox';
import kChip from './types/Chip';
import kDialog from './types/Dialog';
import kDialogButton from './types/DialogButton';
import kFab from './types/Fab';
import kIcon from './types/Icon';
import kLink from './types/Link';
import kList from './types/List';
import kListButton from './types/ListButton';
import kListGroup from './types/ListGroup';
import kListInput from './types/ListInput';
import kListItem from './types/ListItem';
import kMenuList from './types/MenuList';
import kMenuListItem from './types/MenuListItem';
import kMessage from './types/Message';
import kMessagebar from './types/Messagebar';
import kMessages from './types/Messages';
import kMessagesTitle from './types/MessagesTitle';
import kNavbar from './types/Navbar';
import kNavbarBackLink from './types/NavbarBackLink';
import kNotification from './types/Notification';
import kPage from './types/Page';
import kPanel from './types/Panel';
import kPopover from './types/Popover';
import kPopup from './types/Popup';
import kPreloader from './types/Preloader';
import kProgressbar from './types/Progressbar';
import kRadio from './types/Radio';
import kRange from './types/Range';
import kSearchbar from './types/Searchbar';
import kSegmented from './types/Segmented';
import kSegmentedButton from './types/SegmentedButton';
import kSheet from './types/Sheet';
import kStepper from './types/Stepper';
import kTabbar from './types/Tabbar';
import kTabbarLink from './types/TabbarLink';
import kTable from './types/Table';
import kTableBody from './types/TableBody';
import kTableCell from './types/TableCell';
import kTableHead from './types/TableHead';
import kTableRow from './types/TableRow';
import kToast from './types/Toast';
import kToggle from './types/Toggle';
import kToolbar from './types/Toolbar';

// PROVIDER
declare const kProvider: DefineComponent<
  {
    /**
     * App theme. If set to `'parent'` it will look for `ios` or `md` class on root `<html>` element, useful to use with parent framework like Framework7 or Ionic
     *
     * @default 'material'
     */
    theme: {
      type: StringConstructor;
      default: 'material';
    };
    /**
     * Include `dark:` variants (if dark theme is in use)
     *
     * @default false
     * */
    dark: {
      type: BooleanConstructor;
      default: false;
    };
    /**
     * Enables touch ripple effect in Material theme. Allows to globally disable touch ripple for all components
     *
     * @default true
     */
    touchRipple: {
      type: BooleanConstructor;
      default: true;
    };
  },
  () => JSX.Element,
  unknown,
  {},
  {},
  ComponentOptionsMixin,
  ComponentOptionsMixin,
  {}
>;

// HELPERS
declare const useTheme: () => Ref<'material' | 'ios'>;

export { kActions, kActions as Actions, kActionsButton, kActionsButton as ActionsButton, kActionsGroup, kActionsGroup as ActionsGroup, kActionsLabel, kActionsLabel as ActionsLabel, kApp, kApp as App, kBadge, kBadge as Badge, kBlock, kBlock as Block, kBlockFooter, kBlockFooter as BlockFooter, kBlockHeader, kBlockHeader as BlockHeader, kBlockTitle, kBlockTitle as BlockTitle, kBreadcrumbs, kBreadcrumbs as Breadcrumbs, kBreadcrumbsCollapsed, kBreadcrumbsCollapsed as BreadcrumbsCollapsed, kBreadcrumbsItem, kBreadcrumbsItem as BreadcrumbsItem, kBreadcrumbsSeparator, kBreadcrumbsSeparator as BreadcrumbsSeparator, kButton, kButton as Button, kCard, kCard as Card, kCheckbox, kCheckbox as Checkbox, kChip, kChip as Chip, kDialog, kDialog as Dialog, kDialogButton, kDialogButton as DialogButton, kFab, kFab as Fab, kIcon, kIcon as Icon, kLink, kLink as Link, kList, kList as List, kListButton, kListButton as ListButton, kListGroup, kListGroup as ListGroup, kListInput, kListInput as ListInput, kListItem, kListItem as ListItem, kMenuList, kMenuList as MenuList, kMenuListItem, kMenuListItem as MenuListItem, kMessage, kMessage as Message, kMessagebar, kMessagebar as Messagebar, kMessages, kMessages as Messages, kMessagesTitle, kMessagesTitle as MessagesTitle, kNavbar, kNavbar as Navbar, kNavbarBackLink, kNavbarBackLink as NavbarBackLink, kNotification, kNotification as Notification, kPage, kPage as Page, kPanel, kPanel as Panel, kPopover, kPopover as Popover, kPopup, kPopup as Popup, kPreloader, kPreloader as Preloader, kProgressbar, kProgressbar as Progressbar, kRadio, kRadio as Radio, kRange, kRange as Range, kSearchbar, kSearchbar as Searchbar, kSegmented, kSegmented as Segmented, kSegmentedButton, kSegmentedButton as SegmentedButton, kSheet, kSheet as Sheet, kStepper, kStepper as Stepper, kTabbar, kTabbar as Tabbar, kTabbarLink, kTabbarLink as TabbarLink, kTable, kTable as Table, kTableBody, kTableBody as TableBody, kTableCell, kTableCell as TableCell, kTableHead, kTableHead as TableHead, kTableRow, kTableRow as TableRow, kToast, kToast as Toast, kToggle, kToggle as Toggle, kToolbar, kToolbar as Toolbar }
export { useTheme, kProvider, kProvider as Provider };
