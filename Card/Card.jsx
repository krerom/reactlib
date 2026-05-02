import React from "react";
import "./Card.css";

/**
 * Card container component for grouping related content.
 *
 * Supports visual variants, padding control, and optional hover interaction.
 * Typically used together with CardHeader, CardBody, and CardFooter.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content.
 * @param {"flat" | "elevated" | "outline"} [props.variant="elevated"] - Visual style of the card.
 * @param {"none" | "sm" | "md" | "lg"} [props.padding="md"] - Internal spacing.
 * @param {boolean} [props.hover=false] - Enables hover elevation effect.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 *
 * @example
 * <Card hover variant="elevated">
 *   <CardBody>Content</CardBody>
 * </Card>
 */

export function Card({
    children,
    variant = "elevated",
    padding = "md",
    hover = false,
    as: Tag = "div",
    className = "",
    ...props
}) {
    return (
        <Tag
            className={[
                "card",
                `card--${variant}`,
                `card--pad-${padding}`,
                hover && "card--hover",
                className,
            ].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </Tag>
    );
}

/**
 * Card header section.
 *
 * Displays title, subtitle, and optional extra content (e.g., actions).
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.title] - Main heading.
 * @param {React.ReactNode} [props.subtitle] - Secondary text below title.
 * @param {React.ReactNode} [props.extra] - Right-aligned content (e.g., buttons, badges).
 * @param {string} [props.className] - Additional class names.
 *
 * @example
 * <CardHeader
 *   title="Project Oasis"
 *   subtitle="Luxury Travel"
 *   extra={<Badge>New</Badge>}
 * />
 */

export function CardHeader({ title, subtitle, extra, className = "" }) {
    return (
        <div className={`card-header ${className}`}>
            <div className="card-header__content">
                {title && <h3 className="card-title">{title}</h3>}
                {subtitle && <p className="card-subtitle">{subtitle}</p>}
            </div>
            {extra && <div className="card-header__extra">{extra}</div>}
        </div>
    );
}

/**
 * Main content area of the card.
 *
 * Used for arbitrary content such as text, forms, or media.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Body content.
 * @param {string} [props.className] - Additional class names.
 *
 * @example
 * <CardBody>
 *   <p>Detailed insights into the project.</p>
 * </CardBody>
 */

export function CardBody({ children, className = "" }) {
    return <div className={`card-body ${className}`}>{children}</div>;
}

/**
 * Card footer section.
 *
 * Typically used for actions such as buttons or links.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Footer content.
 * @param {"start" | "center" | "end" | "between"} [props.align="end"] - Horizontal alignment of content.
 * @param {string} [props.className] - Additional class names.
 *
 * @example
 * <CardFooter align="between">
 *   <Button size="sm">Cancel</Button>
 *   <Button size="sm" variant="primary">Save</Button>
 * </CardFooter>
 */

export function CardFooter({ children, className = "", align = "end" }) {
    return (
        <div className={`card-footer card-footer--align-${align} ${className}`}>
            {children}
        </div>
    );
}