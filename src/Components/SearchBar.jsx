import React from "react";

export default function SearchBar(props) {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    border: "1px solid black",
                    width: "max-content",
                    position: "relative",
                    margin: "auto"
                }}
            >
                <input
                    onChange={props.handleSearchChange}
                    value={props.value}
                    style={{ height: 30, width: 400, border: "0px" }}
                />
                <img
                    src={"https://static.thenounproject.com/png/875358-200.png"}
                    alt="searchIcon"
                    onClick={props.search}
                    style={{ position: "absolute", right: 0, bottom: 0, width: 30 }}
                />
            </div>
        </>
    );
}
