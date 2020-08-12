import React from "react";

export default function NavLink(props) {
    return (
        <>
            <a
                style={{
                    fontSize: 20,
                    textDecorationLine: "none",
                    color: "white",
                    margin:  25
                }}

                href={props.link}
            >
                {props.name}
            </a>
        </>
    );
}
