/**
 * Badge component for displaying small status indicators or labels.
 *
 * Commonly used for statuses, tags, counts, or metadata within UI elements.
 * Supports different visual variants, tones, and sizes.
 *
 * @component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content inside the badge (text, number, etc.).
 * @param {"neutral" | "primary" | "success" | "warning" | "danger"} [props.variant="neutral"] - Color variant of the badge.
 * @param {"soft" | "solid" | "outline"} [props.tone="soft"] - Visual tone/style of the badge.
 * @param {"xs" | "sm" | "md" | "lg"} [props.size="md"] - Size of the badge.
 * @param {boolean} [props.rounded=false] - Whether the badge has fully rounded (pill) shape.
 * @param {React.ElementType} [props.as="span"] - Element or component to render as.
 * @param {string} [props.className] - Additional class names for styling overrides.
 * @param {Object} [props.props] - Additional props spread onto the root element.
 *
 * @returns {JSX.Element} A styled badge component.
 *
 * @example
 * <Badge variant="success">Active</Badge>
 *
 * @example
 * <Badge variant="primary" tone="solid" rounded>
 *   New
 * </Badge>
 */

import React from "react";
import "./Badge.css";

export function Badge({
  children,
  variant = "neutral",
  tone = "soft",
  size = "md",
  rounded = false,
  as: Tag = "span",
  className = "",
  ...props
}) {
  return (
    <Tag
      className={[
        "badge",
        `badge--${variant}`,
        `badge--tone-${tone}`,
        `badge--${size}`,
        rounded && "badge--rounded",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </Tag>
  );
}
