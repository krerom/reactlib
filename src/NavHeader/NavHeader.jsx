import React, { useState, useEffect, useRef, useCallback } from "react";
import "./NavHeader.css";

/**
 * Responsive navigation header with desktop links and mobile drawer.
 *
 * Handles:
 * - Sticky positioning
 * - Scroll-based styling
 * - Mobile menu (overlay + drawer)
 * - Active link state (internal + URL sync)
 *
 * Supports both controlled (`links[].active`) and automatic active state
 * via URL hash/path detection.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.logo - Brand element rendered on the left.
 * @param {Array<Object>} props.links - Navigation items.
 * @param {string} props.links[].label - Display text.
 * @param {string} props.links[].href - Target URL or hash.
 * @param {boolean} [props.links[].active] - Manual active override.
 * @param {boolean} [props.links[].external] - Opens link in new tab.
 * @param {React.ReactNode} [props.actions] - Right-aligned actions (e.g., buttons).
 * @param {boolean} [props.sticky=true] - Enables sticky positioning.
 * @param {"sm"|"md"|"lg"|"xl"|"full"} [props.maxWidth="xl"] - Inner container width.
 * @param {boolean} [props.transparent=false] - Transparent until scroll.
 * @param {string} [props.defaultActive="#"] - Initial active link before URL sync.
 *
 * @example
 * <NavHeader
 *   logo={<strong>MyLib</strong>}
 *   defaultActive="#components"
 *   links={[
 *     { label: "Home", href: "#" },
 *     { label: "Components", href: "#components" },
 *     { label: "GitHub", href: "https://github.com", external: true }
 *   ]}
 *   actions={<Button size="sm">Download</Button>}
 * />
 */

export function NavHeader({
    logo,
    links = [],
    actions,
    sticky = true,
    maxWidth = "xl",
    transparent = false,
    defaultActive = "#", // Added: let user define starting point
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
        const onKey = (e) => { if (e.key === "Escape") close(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [close, open]);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
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
        open && "nav-header--open",
    ].filter(Boolean).join(" ");

    return (
        <>
            <header className={navClass} role="banner">
                <div className={`nav-inner nav-inner--${maxWidth}`}>
                    <div className="nav-logo">{logo}</div>

                    <nav className="nav-links" aria-label="Primary navigation">
                        {links.map((link) => (
                            <NavLink
                                key={link.href}
                                {...link}
                                // Link is active if it matches internal state OR parent override
                                active={link.active ?? (activePath === link.href)}
                                onClick={() => handleLinkClick(link.href)}
                            />
                        ))}
                    </nav>

                    {actions && <div className="nav-actions">{actions}</div>}

                    <button
                        className={`nav-burger ${open ? "nav-burger--open" : ""}`}
                        onClick={toggle}
                        aria-expanded={open}
                        aria-controls="nav-drawer"
                        aria-label={open ? "Close menu" : "Open menu"}
                    >
                        <span className="nav-burger__bar" />
                        <span className="nav-burger__bar" />
                        <span className="nav-burger__bar" />
                    </button>
                </div>
            </header>

            <div
                className={`nav-overlay ${open ? "nav-overlay--visible" : ""}`}
                aria-hidden="true"
                onClick={close}
            />

            <div
                id="nav-drawer"
                ref={drawerRef}
                className={`nav-drawer ${open ? "nav-drawer--open" : ""}`}
                aria-hidden={!open}
                role="dialog"
                aria-modal="true"
            >
                <div className="nav-drawer__header">
                    <div className="nav-logo">{logo}</div>
                    <button className="nav-drawer__close" onClick={close} aria-label="Close menu">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <nav className="nav-drawer__links">
                    {links.map((link) => (
                        <NavLink
                            key={link.href}
                            {...link}
                            mobile
                            active={link.active ?? (activePath === link.href)}
                            onClick={() => handleLinkClick(link.href)}
                        />
                    ))}
                </nav>

                {actions && <div className="nav-drawer__actions">{actions}</div>}
            </div>
        </>
    );
}

/**
 * Navigation link used inside NavHeader.
 *
 * Supports:
 * - Active state styling
 * - External links (opens in new tab)
 * - Mobile variant styling
 * - Custom element rendering (e.g., React Router Link)
 *
 * @param {Object} props
 * @param {React.ReactNode} props.label - Link text/content.
 * @param {string} props.href - Target URL or hash.
 * @param {boolean} [props.active=false] - Whether the link is active.
 * @param {boolean} [props.external=false] - Opens in new tab with indicator icon.
 * @param {boolean} [props.mobile=false] - Applies mobile-specific styles.
 * @param {React.ElementType} [props.as="a"] - Custom component (e.g., Link).
 * @param {(event: React.MouseEvent) => void} [props.onClick] - Click handler.
 * @param {Object} [props.props] - Additional props forwarded to the element.
 *
 * @example
 * <NavLink label="Home" href="#" active />
 *
 * @example
 * <NavLink
 *   as={Link}
 *   to="/dashboard"
 *   label="Dashboard"
 * />
 */

export function NavLink({
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

    return (
        <Tag
            {...linkProps}
            onClick={onClick}
            className={[
                "nav-link",
                active && "nav-link--active",
                mobile && "nav-link--mobile",
            ].filter(Boolean).join(" ")}
            aria-current={active ? "page" : undefined}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            {...props}
        >
            {label}
            {external && (
                <svg className="nav-link__external" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            )}
        </Tag>
    );
}