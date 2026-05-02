/**
 * Button component for primary user interactions.
 *
 * Supports multiple visual variants, sizes, loading state, and optional icons.
 * Designed as a flexible, reusable base for actions across applications.
 *
 * @component
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label/content.
 * @param {(e: React.MouseEvent<HTMLButtonElement>) => void} [props.onClick] - Click handler.
 * @param {boolean} [props.disabled=false] - Disables interaction.
 * @param {"primary" | "secondary" | "cta" | "soft" | "outline" | "ghost" | "danger-outline" | "success" | "danger"} [props.variant="primary"] - Visual style variant.
 * @param {"xs" | "sm" | "md" | "lg" | "xl"} [props.size="md"] - Button size.
 * @param {boolean} [props.loading=false] - Shows loading spinner and disables interaction.
 * @param {React.ReactNode} [props.iconLeft] - Icon displayed before the label.
 * @param {React.ReactNode} [props.iconRight] - Icon displayed after the label.
 * @param {boolean} [props.fullWidth=false] - Expands button to full container width.
 * @param {boolean} [props.pill=false] - Applies fully rounded (pill) style.
 * @param {"button" | "submit" | "reset"} [props.type="button"] - Native button type.
 * @param {string} [props.className] - Additional class names for styling overrides.
 * @param {Object} [props.props] - Additional props spread onto the button element.
 *
 * @returns {JSX.Element} A styled button component.
 *
 * @example
 * <Button variant="primary">Save</Button>
 *
 * @example
 * <Button variant="cta" size="lg" loading>
 *   Processing...
 * </Button>
 *
 * @example
 * <Button iconLeft={<Icon />} variant="soft">
 *   With Icon
 * </Button>
 */

import React from "react";
import "./Buttons.css";

export function Button({
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
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={[
                "btn",
                `btn--${variant}`,
                `btn--${size}`,
                loading && "btn--loading",
                fullWidth && "btn--full",
                pill && "btn--pill",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {loading && <span className="btn__spinner" aria-hidden="true" />}
            {!loading && iconLeft && (
                <span className="btn__icon btn__icon--left">{iconLeft}</span>
            )}
            <span className="btn__label">{children}</span>
            {!loading && iconRight && (
                <span className="btn__icon btn__icon--right">{iconRight}</span>
            )}
        </button>
    );
}

export function ButtonGroup({ children, gap = "sm", attached = false, className = "" }) {
    return (
        <div
            className={[
                "btn-group",
                `btn-group--gap-${gap}`,
                attached && "btn-group--attached",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
        >
            {children}
        </div>
    );
}

export function IconButton({
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
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className={["btn", "btn--icon-only", `btn--${variant}`, `btn--${size}`, className]
                .filter(Boolean)
                .join(" ")}
            {...props}
        >
            {icon}
        </button>
    );
}