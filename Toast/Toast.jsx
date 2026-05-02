import React, { useEffect, useRef, useState } from "react";
import "./Toast.css";

/**
 * Toast notification component.
 *
 * Displays temporary feedback messages with auto-dismiss support,
 * manual close control, and simple success/error styling.
 *
 * Includes built-in exit animation handling before unmounting.
 *
 * @param {Object} props
 * @param {string} props.message - Text content displayed in the toast.
 * @param {"success" | "error"} [props.type="success"] - Visual state of the toast.
 * @param {number} [props.duration=4000] - Auto-dismiss duration in milliseconds.
 * @param {"top" | "bottom"} [props.position="top"] - Screen position of the toast container.
 * @param {() => void} [props.onClose] - Callback fired after toast exit animation completes.
 *
 * @example
 * <Toast
 *   message="Saved successfully"
 *   type="success"
 *   duration={3000}
 *   position="top"
 *   onClose={() => setToast(null)}
 * />
 */

export function Toast({
    message,
    type = "success",
    duration = 4000,
    position = "top",
    onClose,
}) {
    const [isExiting, setIsExiting] = useState(false);
    const closeTimeoutRef = useRef(null);
    const hasClosedRef = useRef(false);

    const handleClose = () => {
        if (hasClosedRef.current) return;
        hasClosedRef.current = true;
        setIsExiting(true);
        closeTimeoutRef.current = window.setTimeout(() => {
            if (typeof onClose === "function") onClose();
        }, 300);
    };

    useEffect(() => {
        if (duration <= 0) return undefined;
        const timer = window.setTimeout(() => {
            handleClose();
        }, duration);

        return () => window.clearTimeout(timer);
    }, [duration]);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    return (
        <div
            className={[
                "toast-wrapper",
                `toast-wrapper--${position}`,
                isExiting && "toast-wrapper--exit"
            ].filter(Boolean).join(" ")}
        >
            <div className={`toast toast--${type}`} role="alert" aria-live="assertive">
                <div className="toast__icon">
                    {type === "success" ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                    )}
                </div>

                <span className="toast__message">{message}</span>

                <button className="toast__close" onClick={handleClose} aria-label="Dismiss">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    );
}