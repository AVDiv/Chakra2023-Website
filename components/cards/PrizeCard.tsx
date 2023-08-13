import React from "react";
import TypeIt from "typeit-react";

export function PrizeCard({ ...props }) {
    return (
        <div className="items-center text-glow-yellow w-80 h-96 rounded-lg bg-[#212121] shadow-lg my-5 mx-7 hover:bg-transparent hover:shadow-none transition-all hover:border-[#E5212C] border-[#FFAC30] hover:border-2 ">
            <div className="w-full h-4/5">

            </div>
            <div className="w-full h-1/5">
                <div className="px-4 py-2 text-center">
                    <TypeIt options={{ waitUntilVisible: true, cursorChar: '_' }}>
                        {props.rank}<br/>
                        Rs. {props.price}
                    </TypeIt>
                </div>
            </div>
        </div>
    )
}