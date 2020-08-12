import React from "react";

export default function Tablet(props) {
    return (
        <>
            <div style={{ display: "inline-block", margin: 5 }}>
                <div
                    style={{
                        display: "flex",
                        padding: 5,
                        border: "1px solid grey",
                        borderRadius: 30,
                        width: "max-content",
                        alignItems: "center",
                        boxShadow: "0px 3px 0px 0px rgba(128,128,128, .3)"
                    }}
                >
                    <div>
                        <img
                            src={props.url}
                            style={{ width: 30, borderRadius: 25 }}
                            alt="tabImg"
                        />
                    </div>
                    <div
                        style={{
                            padding: 5,
                            marginLeft: 5,
                            color: "rgb(132,132,132)",
                            fontWeight: "bold"
                        }}
                    >
                        {props.name}
                    </div>
                </div>
            </div>
        </>
    );
}
