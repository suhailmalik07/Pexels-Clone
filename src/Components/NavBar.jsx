import React from "react";
import PexelIcon from "./PexelIcon";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar"
import styled from 'styled-components';


const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;

    background: #232a34;
    padding: 0rem 1rem;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 66px;

    div:first-child{
        flex: 1;
    }
    /* div:last-child{
        text-align: right;
        flex: 2;
    } */
`

const IconSearchContatiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export default function NavBar({ handleSearch }) {
    return (
        <>
            <Container>
                <IconSearchContatiner>
                    <PexelIcon />
                    <NavLink name="Pexel" style={{ fontWeight: 600, fontSize: "19px" }} />
                    <SearchBar style={{ padding: "14px 17px", marginLeft: "1rem" }} />
                </IconSearchContatiner>
                <div style={{marginLeft: "1rem"}}>
                    <NavLink name="Explore" />
                    <NavLink name="License" />
                    <NavLink name="Upload" />
                </div>
            </Container>
        </>
    );
}
