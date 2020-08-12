import React from "react";
import PexelIcon from "./PexelIcon";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar"

export default function NavBar(props) {
    return (
        <>
            <div
                style={{
                    border: "1px solid black",
                    height: 50,
                    background: "rgb(35, 42, 52) ",
                    padding: 5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        width: "max-content",
                        marginLeft:50
                    }}
                >
                    <PexelIcon />
                    <NavLink name="pexel" />
                    <SearchBar />
                </div>
                <div>
                    <NavLink name="explore" />
                    <NavLink name="liscence" />
                    <NavLink name="upload" />
                </div>
                <div style={{marginRight:50}}></div>
            </div>
        </>
    );
}
