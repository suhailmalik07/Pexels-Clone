import React from "react";

export default function Image(props) {
    console.log("in image", props.height, props.width);
    return (
        <>
            <div style={{ margin: 5 }}>
                <img src={props.src} alt="pic" style={{ width: "100%" }} />
            </div>
        </>
    );
}