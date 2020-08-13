import React from "react";

export default function Image({ item, onClick }) {
    const { medium } = item.src
    return (
        <div onClick={onClick} style={{ marginTop: 5 }}>
            <img src={medium} alt="pic" style={{ width: "100%" }} />
        </div>
    );
}