import React from "react";

export function LineArtSide({...props}) {
    return (
    <svg width="294" height="16" viewBox="0 0 294 16" fill="none" className={"line-art "+props.className}>
        <line x1="200.5" y1="8" x2="0.5" y2="8" stroke="black" stroke-width="15"/>
        <line x1="255.5" y1="8" x2="215.5" y2="8" stroke="black" stroke-width="15"/>
        <line x1="293.5" y1="8" x2="270.5" y2="8" stroke="black" stroke-width="15"/>
    </svg>
    )
}