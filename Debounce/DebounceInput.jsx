import React, {useState, useEffect} from 'react';
import './DebounceInput.css';

export function DebounceTextInput ({
    onTimeout,
    timeout=500,
    value,
    placeholder,
    disabled=false,
    variant="primary",
    size="md",
    className,
    loading=false,
    fullWidth=false,
    pill=false,
    ...props
}) {
    const [inputValue, setInputValue] = useState(value ?? "");

    useEffect(()=>{
        let timer = setTimeout(() => {
            onTimeout?.(inputValue);
        }, timeout);
        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        setInputValue(value ?? "");
    }, [value]);

    return(
        <input
            type="text"
            onChange={(e)=>setInputValue(e.target.value)}
            value={inputValue}
            disabled={disabled}
            placeholder={placeholder}
            className={[
                "inp",
                `inp--${variant}`,
                `inp--${size}`,
                loading     && "inp--loading",
                fullWidth   && "inp--full",
                pill        && "inp--pill",
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            {...props}
        />
    );
}

/**
 * DebounceInputSlider
 * @param {Number} value - Initial percentage (0-100)
 * @param {Function} onTimeout - Callback fired after debounce
 * @param {Number} timeout - Delay in ms
 * @param {String} variant - "primary" | "success" | "error"
 * @param {String} size - "sm" | "md" | "lg"
 * @param {Boolean} showLabel - Toggle the % display
 */

export function DebounceInputSlider({
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
    const [sliderValue, setSliderValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onTimeout?.(Number(sliderValue));
        }, timeout);

        return () => clearTimeout(handler);
    }, [sliderValue, timeout, onTimeout]);

    useEffect(() => {
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

    return (
        <div className={containerClasses}>
            <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={sliderValue}
                disabled={disabled}
                onChange={(e) => setSliderValue(e.target.value)}
                className="inp-slider-track"
                {...props}
            />
            {showLabel && (
                <span className="inp-slider-value">
                    {sliderValue}%
                </span>
            )}
        </div>
    );
}