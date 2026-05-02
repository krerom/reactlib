// src/Buttons/Button.jsx
import React from "react";
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
  return /* @__PURE__ */ React.createElement(
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
    loading && /* @__PURE__ */ React.createElement("span", { className: "btn__spinner", "aria-hidden": "true" }),
    !loading && iconLeft && /* @__PURE__ */ React.createElement("span", { className: "btn__icon btn__icon--left" }, iconLeft),
    /* @__PURE__ */ React.createElement("span", { className: "btn__label" }, children),
    !loading && iconRight && /* @__PURE__ */ React.createElement("span", { className: "btn__icon btn__icon--right" }, iconRight)
  );
}
function ButtonGroup({ children, gap = "sm", attached = false, className = "" }) {
  return /* @__PURE__ */ React.createElement(
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
  return /* @__PURE__ */ React.createElement(
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
import React2 from "react";
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(
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
  return /* @__PURE__ */ React2.createElement(Tag, { className: "row-spacer", ...props });
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
  return /* @__PURE__ */ React2.createElement(
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
import React3, { useState, useEffect, useRef, useCallback } from "react";
function NavHeader({
  logo,
  links = [],
  actions,
  sticky = true,
  maxWidth = "xl",
  transparent = false,
  defaultActive = "#"
}) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(defaultActive);
  const drawerRef = useRef(null);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close, open]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const handleLinkClick = useCallback((href) => {
    setActivePath(href);
    setOpen(false);
  }, []);
  useEffect(() => {
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
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("header", { className: navClass, role: "banner" }, /* @__PURE__ */ React3.createElement("div", { className: `nav-inner nav-inner--${maxWidth}` }, /* @__PURE__ */ React3.createElement("div", { className: "nav-logo" }, logo), /* @__PURE__ */ React3.createElement("nav", { className: "nav-links", "aria-label": "Primary navigation" }, links.map((link) => /* @__PURE__ */ React3.createElement(
    NavLink,
    {
      key: link.href,
      ...link,
      active: link.active ?? activePath === link.href,
      onClick: () => handleLinkClick(link.href)
    }
  ))), actions && /* @__PURE__ */ React3.createElement("div", { className: "nav-actions" }, actions), /* @__PURE__ */ React3.createElement(
    "button",
    {
      className: `nav-burger ${open ? "nav-burger--open" : ""}`,
      onClick: toggle,
      "aria-expanded": open,
      "aria-controls": "nav-drawer",
      "aria-label": open ? "Close menu" : "Open menu"
    },
    /* @__PURE__ */ React3.createElement("span", { className: "nav-burger__bar" }),
    /* @__PURE__ */ React3.createElement("span", { className: "nav-burger__bar" }),
    /* @__PURE__ */ React3.createElement("span", { className: "nav-burger__bar" })
  ))), /* @__PURE__ */ React3.createElement(
    "div",
    {
      className: `nav-overlay ${open ? "nav-overlay--visible" : ""}`,
      "aria-hidden": "true",
      onClick: close
    }
  ), /* @__PURE__ */ React3.createElement(
    "div",
    {
      id: "nav-drawer",
      ref: drawerRef,
      className: `nav-drawer ${open ? "nav-drawer--open" : ""}`,
      "aria-hidden": !open,
      role: "dialog",
      "aria-modal": "true"
    },
    /* @__PURE__ */ React3.createElement("div", { className: "nav-drawer__header" }, /* @__PURE__ */ React3.createElement("div", { className: "nav-logo" }, logo), /* @__PURE__ */ React3.createElement("button", { className: "nav-drawer__close", onClick: close, "aria-label": "Close menu" }, /* @__PURE__ */ React3.createElement("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.2" }, /* @__PURE__ */ React3.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React3.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })))),
    /* @__PURE__ */ React3.createElement("nav", { className: "nav-drawer__links" }, links.map((link) => /* @__PURE__ */ React3.createElement(
      NavLink,
      {
        key: link.href,
        ...link,
        mobile: true,
        active: link.active ?? activePath === link.href,
        onClick: () => handleLinkClick(link.href)
      }
    ))),
    actions && /* @__PURE__ */ React3.createElement("div", { className: "nav-drawer__actions" }, actions)
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
  return /* @__PURE__ */ React3.createElement(
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
    external && /* @__PURE__ */ React3.createElement("svg", { className: "nav-link__external", width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React3.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), /* @__PURE__ */ React3.createElement("polyline", { points: "15 3 21 3 21 9" }), /* @__PURE__ */ React3.createElement("line", { x1: "10", y1: "14", x2: "21", y2: "3" }))
  );
}

// src/Card/Card.jsx
import React4 from "react";
function Card({
  children,
  variant = "elevated",
  padding = "md",
  hover = false,
  as: Tag = "div",
  className = "",
  ...props
}) {
  return /* @__PURE__ */ React4.createElement(
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
  return /* @__PURE__ */ React4.createElement("div", { className: `card-header ${className}` }, /* @__PURE__ */ React4.createElement("div", { className: "card-header__content" }, title && /* @__PURE__ */ React4.createElement("h3", { className: "card-title" }, title), subtitle && /* @__PURE__ */ React4.createElement("p", { className: "card-subtitle" }, subtitle)), extra && /* @__PURE__ */ React4.createElement("div", { className: "card-header__extra" }, extra));
}
function CardBody({ children, className = "" }) {
  return /* @__PURE__ */ React4.createElement("div", { className: `card-body ${className}` }, children);
}
function CardFooter({ children, className = "", align = "end" }) {
  return /* @__PURE__ */ React4.createElement("div", { className: `card-footer card-footer--align-${align} ${className}` }, children);
}

// src/Toast/Toast.jsx
import React5, { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
function Toast({
  message,
  type = "success",
  duration = 4e3,
  position = "top",
  onClose
}) {
  const [isExiting, setIsExiting] = useState2(false);
  const closeTimeoutRef = useRef2(null);
  const hasClosedRef = useRef2(false);
  const handleClose = () => {
    if (hasClosedRef.current) return;
    hasClosedRef.current = true;
    setIsExiting(true);
    closeTimeoutRef.current = window.setTimeout(() => {
      if (typeof onClose === "function") onClose();
    }, 300);
  };
  useEffect2(() => {
    if (duration <= 0) return void 0;
    const timer = window.setTimeout(() => {
      handleClose();
    }, duration);
    return () => window.clearTimeout(timer);
  }, [duration]);
  useEffect2(() => {
    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      className: [
        "toast-wrapper",
        `toast-wrapper--${position}`,
        isExiting && "toast-wrapper--exit"
      ].filter(Boolean).join(" ")
    },
    /* @__PURE__ */ React5.createElement("div", { className: `toast toast--${type}`, role: "alert", "aria-live": "assertive" }, /* @__PURE__ */ React5.createElement("div", { className: "toast__icon" }, type === "success" ? /* @__PURE__ */ React5.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3" }, /* @__PURE__ */ React5.createElement("polyline", { points: "20 6 9 17 4 12" })) : /* @__PURE__ */ React5.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3" }, /* @__PURE__ */ React5.createElement("circle", { cx: "12", cy: "12", r: "10" }), /* @__PURE__ */ React5.createElement("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), /* @__PURE__ */ React5.createElement("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" }))), /* @__PURE__ */ React5.createElement("span", { className: "toast__message" }, message), /* @__PURE__ */ React5.createElement("button", { className: "toast__close", onClick: handleClose, "aria-label": "Dismiss" }, /* @__PURE__ */ React5.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5" }, /* @__PURE__ */ React5.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), /* @__PURE__ */ React5.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))))
  );
}

// src/Badge/Badge.jsx
import React6 from "react";
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
  return /* @__PURE__ */ React6.createElement(
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
import React7 from "react";
import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X
} from "lucide-react";
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
  const Icon = icon || defaultIconByVariant[variant] || Info;
  const DismissIcon = X;
  return /* @__PURE__ */ React7.createElement(
    "div",
    {
      className: ["alert", `alert--${variant}`, className].filter(Boolean).join(" "),
      role,
      ...props
    },
    /* @__PURE__ */ React7.createElement("div", { className: "alert__icon", "aria-hidden": "true" }, typeof Icon === "function" ? /* @__PURE__ */ React7.createElement(Icon, { size: 18 }) : Icon),
    /* @__PURE__ */ React7.createElement("div", { className: "alert__content" }, title && /* @__PURE__ */ React7.createElement("div", { className: "alert__title" }, title), children && /* @__PURE__ */ React7.createElement("div", { className: "alert__message" }, children)),
    dismissible && /* @__PURE__ */ React7.createElement(
      "button",
      {
        className: "alert__dismiss",
        type: "button",
        onClick: onDismiss,
        "aria-label": "Dismiss alert"
      },
      /* @__PURE__ */ React7.createElement(DismissIcon, { size: 16 })
    )
  );
}
var defaultIconByVariant = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: XCircle
};

// src/Debounce/DebounceInput.jsx
import React8, { useState as useState3, useEffect as useEffect3 } from "react";
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
  const [inputValue, setInputValue] = useState3(value ?? "");
  useEffect3(() => {
    let timer = setTimeout(() => {
      onTimeout == null ? void 0 : onTimeout(inputValue);
    }, timeout);
    return () => clearTimeout(timer);
  }, [inputValue]);
  useEffect3(() => {
    setInputValue(value ?? "");
  }, [value]);
  return /* @__PURE__ */ React8.createElement(
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
  const [sliderValue, setSliderValue] = useState3(value);
  useEffect3(() => {
    const handler = setTimeout(() => {
      onTimeout == null ? void 0 : onTimeout(Number(sliderValue));
    }, timeout);
    return () => clearTimeout(handler);
  }, [sliderValue, timeout, onTimeout]);
  useEffect3(() => {
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
  return /* @__PURE__ */ React8.createElement("div", { className: containerClasses }, /* @__PURE__ */ React8.createElement(
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
  ), showLabel && /* @__PURE__ */ React8.createElement("span", { className: "inp-slider-value" }, sliderValue, "%"));
}
export {
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
};
