/**
 * Alert component for contextual feedback messages.
 *
 * Displays important information such as success messages, warnings, or errors.
 * Includes optional icon support and dismiss functionality.
 *
 * @component
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.title] - Optional heading displayed above the message.
 * @param {React.ReactNode} [props.children] - Main message content of the alert.
 * @param {"info" | "success" | "warning" | "danger"} [props.variant="info"] - Visual style and semantic meaning.
 * @param {boolean} [props.dismissible=false] - Whether a dismiss (close) button is shown.
 * @param {() => void} [props.onDismiss] - Callback fired when the dismiss button is clicked.
 * @param {React.ReactNode} [props.icon] - Custom icon to override the default variant icon.
 * @param {string} [props.className] - Additional class names for styling overrides.
 * @param {Object} [props.props] - Additional props spread onto the root element.
 *
 * @returns {JSX.Element} A styled alert component.
 *
 * @example
 * <Alert variant="success" title="Success">
 *   Your changes have been saved.
 * </Alert>
 *
 * @example
 * <Alert variant="danger" dismissible onDismiss={() => console.log("closed")}>
 *   Something went wrong.
 * </Alert>
 */

import React from "react";
import "./Alert.css";

export function Alert({
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

  return (
    <div className={["alert", `alert--${variant}`, className].filter(Boolean).join(" ")} role={role} {...props}>
      <div className="alert__icon" aria-hidden="true">
        {icon || defaultIconByVariant[variant] || defaultIconByVariant.info}
      </div>

      <div className="alert__content">
        {title && <div className="alert__title">{title}</div>}
        {children && <div className="alert__message">{children}</div>}
      </div>

      {dismissible && (
        <button className="alert__dismiss" type="button" onClick={onDismiss} aria-label="Dismiss alert">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
}

const defaultIconByVariant = {
  info: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  success: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  warning: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3l-8.47-14.14a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  danger: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),
};
