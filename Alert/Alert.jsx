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

import React from "react";
import "./Alert.css";

import {
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle,
  X,
} from "lucide-react";

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

  const Icon = icon || defaultIconByVariant[variant] || Info;
  const DismissIcon = X;

  return (
    <div
      className={["alert", `alert--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      role={role}
      {...props}
    >
      <div className="alert__icon" aria-hidden="true">
        {typeof Icon === "function" ? <Icon size={18} /> : Icon}
      </div>

      <div className="alert__content">
        {title && <div className="alert__title">{title}</div>}
        {children && <div className="alert__message">{children}</div>}
      </div>

      {dismissible && (
        <button
          className="alert__dismiss"
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
        >
          <DismissIcon size={16} />
        </button>
      )}
    </div>
  );
}

const defaultIconByVariant = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  danger: XCircle,
};