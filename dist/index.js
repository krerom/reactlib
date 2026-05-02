var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.js
var index_exports = {};
__export(index_exports, {
  Alert: () => Alert,
  Badge: () => Badge,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  Card: () => Card,
  CardBody: () => CardBody,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  Container: () => Container,
  DebounceInputSlider: () => DebounceInputSlider,
  DebounceTextInput: () => DebounceTextInput,
  Grid: () => Grid,
  GridItem: () => GridItem,
  IconButton: () => IconButton,
  NavHeader: () => NavHeader,
  NavLink: () => NavLink,
  Row: () => Row,
  Spacer: () => Spacer,
  Stack: () => Stack,
  Toast: () => Toast
});
module.exports = __toCommonJS(index_exports);

// src/Buttons/Button.jsx
var import_react = __toESM(require("react"));
function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary",
  size = "md",
  loading = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  pill = false,
  type = "button",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type,
      onClick,
      disabled: disabled || loading,
      className: [
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        loading && "btn--loading",
        fullWidth && "btn--full",
        pill && "btn--pill",
        className
      ].filter(Boolean).join(" "),
      ...props
    },
    loading && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__spinner", "aria-hidden": "true" }),
    !loading && iconLeft && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__icon btn__icon--left" }, iconLeft),
    /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__label" }, children),
    !loading && iconRight && /* @__PURE__ */ import_react.default.createElement("span", { className: "btn__icon btn__icon--right" }, iconRight)
  );
}
function ButtonGroup({ children, gap = "sm", attached = false, className = "" }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: [
        "btn-group",
        `btn-group--gap-${gap}`,
        attached && "btn-group--attached",
        className
      ].filter(Boolean).join(" ")
    },
    children
  );
}
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      type,
      onClick,
      disabled,
      "aria-label": label,
      className: ["btn", "btn--icon-only", `btn--${variant}`, `btn--${size}`, className].filter(Boolean).join(" "),
      ...props
    },
    icon
  );
}

// src/Layout/Layout.jsx
var import_react2 = __toESM(require("react"));
function Container({
  children,
  size = "lg",
  center = true,
  pad = true,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Tag,
    {
      className: [
        "container",
        `container--${size}`,
        center && "container--center",
        pad && "container--pad",
        className
      ].filter(Boolean).join(" "),
      style,
      ...props
    },
    children
  );
}
function Grid({
  children,
  cols = 12,
  colsMd,
  colsSm,
  gap = "md",
  colGap,
  rowGap,
  align,
  justify,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Tag,
    {
      className: [
        "grid",
        cols === "auto" ? "grid--cols-auto" : `grid--cols-${cols}`,
        colsMd && `grid--cols-md-${colsMd}`,
        colsSm && `grid--cols-sm-${colsSm}`,
        `grid--gap-${gap}`,
        colGap && `grid--col-gap-${colGap}`,
        rowGap && `grid--row-gap-${rowGap}`,
        align && `grid--align-${align}`,
        justify && `grid--justify-${justify}`,
        className
      ].filter(Boolean).join(" "),
      style,
      ...props
    },
    children
  );
}
function GridItem({
  children,
  span = 1,
  spanMd,
  spanSm,
  rowSpan,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Tag,
    {
      className: [
        "grid-item",
        `grid-item--span-${span}`,
        spanMd && `grid-item--span-md-${spanMd}`,
        spanSm && `grid-item--span-sm-${spanSm}`,
        rowSpan && `grid-item--row-${rowSpan}`,
        className
      ].filter(Boolean).join(" "),
      style,
      ...props
    },
    children
  );
}
function Row({
  children,
  gap = "md",
  align = "center",
  justify = "start",
  wrap = true,
  reverse = false,
  collapseAt,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Tag,
    {
      className: [
        "row",
        `row--gap-${gap}`,
        `row--align-${align}`,
        `row--justify-${justify}`,
        wrap && "row--wrap",
        reverse && "row--reverse",
        collapseAt && `row--collapse-${collapseAt}`,
        className
      ].filter(Boolean).join(" "),
      style,
      ...props
    },
    children
  );
}
function Spacer({ as: Tag = "div", ...props }) {
  return /* @__PURE__ */ import_react2.default.createElement(Tag, { className: "row-spacer", ...props });
}
function Stack({
  children,
  gap = "md",
  align = "stretch",
  dividers = false,
  reverse = false,
  as: Tag = "div",
  className = "",
  style,
  ...props
}) {
  return /* @__PURE__ */ import_react2.default.createElement(
    Tag,
    {
      className: [
        "stack",
        `stack--gap-${gap}`,
        `stack--align-${align}`,
        dividers && "stack--dividers",
        reverse && "stack--reverse",
        className
      ].filter(Boolean).join(" "),
      style,
      ...props
    },
    children
  );
}

// src/NavHeader/NavHeader.jsx
var import_react3 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
function NavHeader({
  logo,
  links = [],
  actions,
  sticky = true,
  maxWidth = "xl",
  transparent = false,
  defaultActive = "#"
}) {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const [scrolled, setScrolled] = (0, import_react3.useState)(false);
  const [activePath, setActivePath] = (0, import_react3.useState)(defaultActive);
  const drawerRef = (0, import_react3.useRef)(null);
  const close = (0, import_react3.useCallback)(() => setOpen(false), []);
  const toggle = (0, import_react3.useCallback)(() => setOpen((v) => !v), []);
  (0, import_react3.useEffect)(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  (0, import_react3.useEffect)(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, open]);
  (0, import_react3.useEffect)(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const handleLinkClick = (0, import_react3.useCallback)((href) => {
    setActivePath(href);
    setOpen(false);
  }, []);
  (0, import_react3.useEffect)(() => {
    const syncActive = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (!hash && (path === "/" || path === "")) {
        setActivePath("#");
      } else {
        setActivePath(hash || path);
      }
    };
    syncActive();
    window.addEventListener("hashchange", syncActive);
    window.addEventListener("popstate", syncActive);
    return () => {
      window.removeEventListener("hashchange", syncActive);
      window.removeEventListener("popstate", syncActive);
    };
  }, []);
  const navClass = [
    "nav-header",
    sticky && "nav-header--sticky",
    scrolled && "nav-header--scrolled",
    transparent && !scrolled && "nav-header--transparent",
    open && "nav-header--open"
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, /* @__PURE__ */ import_react3.default.createElement("header", { className: navClass, role: "banner" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: `nav-inner nav-inner--${maxWidth}` }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "nav-logo" }, logo), /* @__PURE__ */ import_react3.default.createElement("nav", { className: "nav-links", "aria-label": "Primary navigation" }, links.map((link) => /* @__PURE__ */ import_react3.default.createElement(
    NavLink,
    {
      key: link.href,
      ...link,
      active: link.active ?? activePath === link.href,
      onClick: () => handleLinkClick(link.href)
    }
  ))), actions && /* @__PURE__ */ import_react3.default.createElement("div", { className: "nav-actions" }, actions), /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      className: `nav-burger ${open ? "nav-burger--open" : ""}`,
      onClick: toggle,
      "aria-expanded": open,
      "aria-controls": "nav-drawer",
      "aria-label": open ? "Close menu" : "Open menu"
    },
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "nav-burger__bar" }),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "nav-burger__bar" }),
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "nav-burger__bar" })
  ))), /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      className: `nav-overlay ${open ? "nav-overlay--visible" : ""}`,
      "aria-hidden": "true",
      onClick: close
    }
  ), /* @__PURE__ */ import_react3.default.createElement(
    "div",
    {
      id: "nav-drawer",
      ref: drawerRef,
      className: `nav-drawer ${open ? "nav-drawer--open" : ""}`,
      "aria-hidden": !open,
      role: "dialog",
      "aria-modal": "true"
    },
    /* @__PURE__ */ import_react3.default.createElement("div", { className: "nav-drawer__header" }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "nav-logo" }, logo), /* @__PURE__ */ import_react3.default.createElement("button", { className: "nav-drawer__close", onClick: close, "aria-label": "Close menu" }, /* @__PURE__ */ import_react3.default.createElement(import_lucide_react.X, null))),
    /* @__PURE__ */ import_react3.default.createElement("nav", { className: "nav-drawer__links" }, links.map((link) => /* @__PURE__ */ import_react3.default.createElement(
      NavLink,
      {
        key: link.href,
        ...link,
        mobile: true,
        active: link.active ?? activePath === link.href,
        onClick: () => handleLinkClick(link.href)
      }
    ))),
    actions && /* @__PURE__ */ import_react3.default.createElement("div", { className: "nav-drawer__actions" }, actions)
  ));
}
function NavLink({
  label,
  href,
  active = false,
  external = false,
  mobile = false,
  as: Tag = "a",
  onClick,
  ...props
}) {
  const linkProps = Tag === "a" ? { href } : {};
  return /* @__PURE__ */ import_react3.default.createElement(
    Tag,
    {
      ...linkProps,
      onClick,
      className: [
        "nav-link",
        active && "nav-link--active",
        mobile && "nav-link--mobile"
      ].filter(Boolean).join(" "),
      "aria-current": active ? "page" : void 0,
      ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
      ...props
    },
    label,
    external && /* @__PURE__ */ import_react3.default.createElement(import_lucide_react.ExternalLink, null)
  );
}

// src/Card/Card.jsx
var import_react4 = __toESM(require("react"));
function Card({
  children,
  variant = "elevated",
  padding = "md",
  hover = false,
  as: Tag = "div",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ import_react4.default.createElement(
    Tag,
    {
      className: [
        "card",
        `card--${variant}`,
        `card--pad-${padding}`,
        hover && "card--hover",
        className
      ].filter(Boolean).join(" "),
      ...props
    },
    children
  );
}
function CardHeader({ title, subtitle, extra, className = "" }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: `card-header ${className}` }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-header__content" }, title && /* @__PURE__ */ import_react4.default.createElement("h3", { className: "card-title" }, title), subtitle && /* @__PURE__ */ import_react4.default.createElement("p", { className: "card-subtitle" }, subtitle)), extra && /* @__PURE__ */ import_react4.default.createElement("div", { className: "card-header__extra" }, extra));
}
function CardBody({ children, className = "" }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: `card-body ${className}` }, children);
}
function CardFooter({ children, className = "", align = "end" }) {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: `card-footer card-footer--align-${align} ${className}` }, children);
}

// src/Toast/Toast.jsx
var import_react5 = __toESM(require("react"));
var import_lucide_react2 = require("lucide-react");
function Toast({
  message,
  type = "success",
  duration = 4e3,
  position = "top",
  onClose
}) {
  const [isExiting, setIsExiting] = (0, import_react5.useState)(false);
  const closeTimeoutRef = (0, import_react5.useRef)(null);
  const hasClosedRef = (0, import_react5.useRef)(false);
  const handleClose = () => {
    if (hasClosedRef.current) return;
    hasClosedRef.current = true;
    setIsExiting(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      if (typeof onClose === "function") onClose();
    }, 300);
  };
  (0, import_react5.useEffect)(() => {
    if (duration <= 0) return void 0;
    const timer = window.setTimeout(() => {
      handleClose();
    }, duration);
    return () => window.clearTimeout(timer);
  }, [duration]);
  (0, import_react5.useEffect)(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ import_react5.default.createElement(
    "div",
    {
      className: [
        "toast-wrapper",
        `toast-wrapper--${position}`,
        isExiting && "toast-wrapper--exit"
      ].filter(Boolean).join(" ")
    },
    /* @__PURE__ */ import_react5.default.createElement("div", { className: `toast toast--${type}`, role: "alert", "aria-live": "assertive" }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "toast__icon" }, type === "success" ? /* @__PURE__ */ import_react5.default.createElement(import_lucide_react2.CheckCircle, null) : /* @__PURE__ */ import_react5.default.createElement(import_lucide_react2.AlertCircle, null)), /* @__PURE__ */ import_react5.default.createElement("span", { className: "toast__message" }, message), /* @__PURE__ */ import_react5.default.createElement("button", { className: "toast__close", onClick: handleClose, "aria-label": "Dismiss" }, /* @__PURE__ */ import_react5.default.createElement(import_lucide_react2.X, null)))
  );
}

// src/Badge/Badge.jsx
var import_react6 = __toESM(require("react"));
function Badge({
  children,
  variant = "neutral",
  tone = "soft",
  size = "md",
  rounded = false,
  as: Tag = "span",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ import_react6.default.createElement(
    Tag,
    {
      className: [
        "badge",
        `badge--${variant}`,
        `badge--tone-${tone}`,
        `badge--${size}`,
        rounded && "badge--rounded",
        className
      ].filter(Boolean).join(" "),
      ...props
    },
    children
  );
}

// src/Alert/Alert.jsx
var import_react7 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
function Alert({
  title,
  children,
  variant = "info",
  dismissible = false,
  onDismiss,
  icon,
  className = "",
  ...props
}) {
  const role = variant === "danger" ? "alert" : "status";
  const Icon = icon || defaultIconByVariant[variant] || import_lucide_react3.Info;
  const DismissIcon = import_lucide_react3.X;
  return /* @__PURE__ */ import_react7.default.createElement(
    "div",
    {
      className: ["alert", `alert--${variant}`, className].filter(Boolean).join(" "),
      role,
      ...props
    },
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "alert__icon", "aria-hidden": "true" }, typeof Icon === "function" ? /* @__PURE__ */ import_react7.default.createElement(Icon, { size: 18 }) : Icon),
    /* @__PURE__ */ import_react7.default.createElement("div", { className: "alert__content" }, title && /* @__PURE__ */ import_react7.default.createElement("div", { className: "alert__title" }, title), children && /* @__PURE__ */ import_react7.default.createElement("div", { className: "alert__message" }, children)),
    dismissible && /* @__PURE__ */ import_react7.default.createElement(
      "button",
      {
        className: "alert__dismiss",
        type: "button",
        onClick: onDismiss,
        "aria-label": "Dismiss alert"
      },
      /* @__PURE__ */ import_react7.default.createElement(DismissIcon, { size: 16 })
    )
  );
}
var defaultIconByVariant = {
  info: import_lucide_react3.Info,
  success: import_lucide_react3.CheckCircle,
  warning: import_lucide_react3.AlertTriangle,
  danger: import_lucide_react3.XCircle
};

// src/Debounce/DebounceInput.jsx
var import_react8 = __toESM(require("react"));
function DebounceTextInput({
  onTimeout,
  timeout = 500,
  value,
  placeholder,
  disabled = false,
  variant = "primary",
  size = "md",
  className,
  loading = false,
  fullWidth = false,
  pill = false,
  ...props
}) {
  const [inputValue, setInputValue] = (0, import_react8.useState)(value ?? "");
  (0, import_react8.useEffect)(() => {
    let timer = setTimeout(() => {
      onTimeout == null ? void 0 : onTimeout(inputValue);
    }, timeout);
    return () => clearTimeout(timer);
  }, [inputValue]);
  (0, import_react8.useEffect)(() => {
    setInputValue(value ?? "");
  }, [value]);
  return /* @__PURE__ */ import_react8.default.createElement(
    "input",
    {
      type: "text",
      onChange: (e) => setInputValue(e.target.value),
      value: inputValue,
      disabled,
      placeholder,
      className: [
        "inp",
        `inp--${variant}`,
        `inp--${size}`,
        loading && "inp--loading",
        fullWidth && "inp--full",
        pill && "inp--pill",
        className
      ].filter(Boolean).join(" "),
      ...props
    }
  );
}
function DebounceInputSlider({
  value = 0,
  onTimeout,
  timeout = 500,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = true,
  showLabel = true,
  className,
  ...props
}) {
  const [sliderValue, setSliderValue] = (0, import_react8.useState)(value);
  (0, import_react8.useEffect)(() => {
    const handler = setTimeout(() => {
      onTimeout == null ? void 0 : onTimeout(Number(sliderValue));
    }, timeout);
    return () => clearTimeout(handler);
  }, [sliderValue, timeout, onTimeout]);
  (0, import_react8.useEffect)(() => {
    setSliderValue(value);
  }, [value]);
  const containerClasses = [
    "inp-slider-container",
    `inp--${variant}`,
    `inp--${size}`,
    fullWidth && "inp--full",
    disabled && "inp--disabled",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ import_react8.default.createElement("div", { className: containerClasses }, /* @__PURE__ */ import_react8.default.createElement(
    "input",
    {
      type: "range",
      min: "0",
      max: "100",
      step: "1",
      value: sliderValue,
      disabled,
      onChange: (e) => setSliderValue(e.target.value),
      className: "inp-slider-track",
      ...props
    }
  ), showLabel && /* @__PURE__ */ import_react8.default.createElement("span", { className: "inp-slider-value" }, sliderValue, "%"));
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  DebounceInputSlider,
  DebounceTextInput,
  Grid,
  GridItem,
  IconButton,
  NavHeader,
  NavLink,
  Row,
  Spacer,
  Stack,
  Toast
});
