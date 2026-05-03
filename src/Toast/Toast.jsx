import React, { useEffect, useRef, useState } from "react";
import "./Toast.css";
import {
    CheckCircle,
    AlertCircle,
    X,
} from "lucide-react";

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
                        <CheckCircle/>
                    ) : (
                        <AlertCircle/>
                    )}
                </div>

                <span className="toast__message">{message}</span>

                <button className="toast__close" onClick={handleClose} aria-label="Dismiss">
                    <X/>
                </button>
            </div>
        </div>
    );
}