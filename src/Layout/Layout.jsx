import React from "react";
import "./Layout.css";

/**
 * Container component for page layout.
 *
 * Provides a responsive max-width wrapper with optional centering and padding.
 * Commonly used as the top-level layout constraint.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Inner content.
 * @param {"sm" | "md" | "lg" | "xl" | "full"} [props.size="lg"] - Max-width preset.
 * @param {boolean} [props.center=true] - Horizontally center the container.
 * @param {boolean} [props.pad=true] - Apply horizontal padding.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 *
 * @example
 * <Container size="md">
 *   <p>Content</p>
 * </Container>
 */

export function Container({
    children,
    size = "lg",
    center = true,
    pad = true,
    as: Tag = "div",
    className = "",
    style,
    ...props
}) {
    return (
        <Tag
            className={[
                "container",
                `container--${size}`,
                center && "container--center",
                pad && "container--pad",
                className,
            ].filter(Boolean).join(" ")}
            style={style}
            {...props}
        >
            {children}
        </Tag>
    );
}

/**
 * Grid layout component using CSS Grid.
 *
 * Supports responsive column definitions and flexible gap control.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Grid items.
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"auto"} [props.cols=12] - Column count for desktop.
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"full"} [props.colsMd] - Column count for tablet (≤768px).
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"full"} [props.colsSm] - Column count for mobile (≤480px).
 * @param {"none"|"xs"|"sm"|"md"|"lg"|"xl"} [props.gap="md"] - Gap between items.
 * @param {"none"|"xs"|"sm"|"md"|"lg"|"xl"} [props.colGap] - Column gap override.
 * @param {"none"|"xs"|"sm"|"md"|"lg"|"xl"} [props.rowGap] - Row gap override.
 * @param {"start"|"center"|"end"|"stretch"} [props.align] - Align items vertically.
 * @param {"start"|"center"|"end"|"stretch"} [props.justify] - Justify items horizontally.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 *
 * @example
 * <Grid cols={3} colsMd={2} colsSm={1} gap="lg">
 *   <GridItem span={1}>A</GridItem>
 *   <GridItem span={1}>B</GridItem>
 * </Grid>
 */

export function Grid({
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
    return (
        <Tag
            className={[
                "grid",
                cols === "auto" ? "grid--cols-auto" : `grid--cols-${cols}`,
                colsMd && `grid--cols-md-${colsMd}`,
                colsSm && `grid--cols-sm-${colsSm}`,
                `grid--gap-${gap}`,
                colGap && `grid--col-gap-${colGap}`,
                rowGap && `grid--row-gap-${rowGap}`,
                align && `grid--align-${align}`,
                justify && `grid--justify-${justify}`,
                className,
            ].filter(Boolean).join(" ")}
            style={style}
            {...props}
        >
            {children}
        </Tag>
    );
}

/**
 * Grid item component for use inside Grid.
 *
 * Controls column and row spanning across responsive breakpoints.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Item content.
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"full"} [props.span=1] - Column span (desktop).
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"full"} [props.spanMd] - Column span (tablet).
 * @param {1|2|3|4|5|6|7|8|9|10|11|12|"full"} [props.spanSm] - Column span (mobile).
 * @param {1|2|3|4|5|6} [props.rowSpan] - Row span.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 *
 * @example
 * <GridItem span={6} spanMd={12}>
 *   Content
 * </GridItem>
 */

export function GridItem({
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
    return (
        <Tag
            className={[
                "grid-item",
                `grid-item--span-${span}`,
                spanMd && `grid-item--span-md-${spanMd}`,
                spanSm && `grid-item--span-sm-${spanSm}`,
                rowSpan && `grid-item--row-${rowSpan}`,
                className,
            ].filter(Boolean).join(" ")}
            style={style}
            {...props}
        >
            {children}
        </Tag>
    );
}

/**
 * Row layout component using Flexbox.
 *
 * Provides horizontal alignment with optional wrapping and responsive stacking.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Row content.
 * @param {"none"|"xs"|"sm"|"md"|"lg"|"xl"} [props.gap="md"] - Spacing between items.
 * @param {"start"|"center"|"end"|"baseline"|"stretch"} [props.align="center"] - Cross-axis alignment.
 * @param {"start"|"center"|"end"|"between"|"around"|"evenly"} [props.justify="start"] - Main-axis alignment.
 * @param {boolean} [props.wrap=true] - Allow wrapping.
 * @param {boolean} [props.reverse=false] - Reverse direction.
 * @param {"sm"|"md"} [props.collapseAt] - Stack vertically below breakpoint.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 *
 * @example
 * <Row justify="between" collapseAt="sm">
 *   <Logo />
 *   <Nav />
 * </Row>
 */

export function Row({
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
    return (
        <Tag
            className={[
                "row",
                `row--gap-${gap}`,
                `row--align-${align}`,
                `row--justify-${justify}`,
                wrap && "row--wrap",
                reverse && "row--reverse",
                collapseAt && `row--collapse-${collapseAt}`,
                className,
            ].filter(Boolean).join(" ")}
            style={style}
            {...props}
        >
            {children}
        </Tag>
    );
}

/**
 * Spacer component for flex layouts.
 *
 * Expands to fill available space inside a Row, pushing siblings apart.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as="div"] - Element type.
 *
 * @example
 * <Row>
 *   <span>Left</span>
 *   <Spacer />
 *   <span>Right</span>
 * </Row>
 */

export function Spacer({ as: Tag = "div", ...props }) {
    return <Tag className="row-spacer" {...props} />;
}

/**
 * Stack layout component for vertical spacing.
 *
 * Arranges children vertically with configurable spacing and optional dividers.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Stack content.
 * @param {"none"|"xs"|"sm"|"md"|"lg"|"xl"} [props.gap="md"] - Spacing between items.
 * @param {"start"|"center"|"end"|"stretch"} [props.align="stretch"] - Horizontal alignment.
 * @param {boolean} [props.dividers=false] - Show dividers between items.
 * @param {boolean} [props.reverse=false] - Reverse order.
 * @param {React.ElementType} [props.as="div"] - Root element type.
 * @param {string} [props.className] - Additional class names.
 * @param {React.CSSProperties} [props.style] - Inline styles.
 *
 * @example
 * <Stack gap="sm" dividers>
 *   <Item />
 *   <Item />
 * </Stack>
 */

export function Stack({
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
    return (
        <Tag
            className={[
                "stack",
                `stack--gap-${gap}`,
                `stack--align-${align}`,
                dividers && "stack--dividers",
                reverse && "stack--reverse",
                className,
            ].filter(Boolean).join(" ")}
            style={style}
            {...props}
        >
            {children}
        </Tag>
    );
}