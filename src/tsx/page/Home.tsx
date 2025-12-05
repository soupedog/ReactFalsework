import React from "react";
import "../../../public/style/index.css"
import "../../../public/style/index.scss"
import "../../../public/style/index.less"

export interface HomeProps {
    readonly text: string
}

export default function Home({text}: HomeProps) {
    return (
        <>
            <div className="text1">
                {text} —————— css
            </div>
            <div className="text2">
                {text} —————— less
            </div>
            <div className="text3">
                {text} —————— scss
            </div>
        </>
    );
}
