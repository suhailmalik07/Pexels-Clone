import React from "react";

export default function OptionBoxes(props) {
    return (
        <>
            <div>
                <div style={{ display: "inline-block", margin: 5 }}>
                    <div
                        style={{
                            display: "flex",
                            padding: 8,
                            border: "1px solid grey",
                            width: "max-content",
                            alignItems: "center",
                            boxShadow: "0px 3px 0px 0px rgba(128,128,128, .3)",
                            justifyContent: "space-between"
                        }}
                    >
                        <div>
                            <img src={props.url} style={{ width: 30 }} alt="tabImg" />
                        </div>
                        <div
                            style={{
                                padding: 5,
                                marginLeft: 5,
                                color: "rgb(47, 129, 250)",
                                fontWeight: "bold"
                            }}
                        >
                            {props.name}
                        </div>
                        <div style={{ color: "grey", fontWeight: "bold" }}>
                            {props.count}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
