import React from "react";

export function LineArt({...props}) {
    return (
        <svg width="15" height="293" viewBox="0 0 15 293" fill="none" className={"line-art "+props.className}>
            <line x1="7.5" y1="93" x2="7.50001" y2="293" stroke="black" stroke-width="15"/>
            <line x1="7.5" y1="38" x2="7.5" y2="78" stroke="black" stroke-width="15"/>
            <line x1="7.5" y1="3.27835e-07" x2="7.5" y2="23" stroke="black" stroke-width="15"/>
        </svg>
    )
}