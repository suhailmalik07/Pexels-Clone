import React from "react";
import PexelIcon from "./PexelIcon";
import NavLink from "./NavLink";
import SearchBar from "./SearchBar"
import styled from 'styled-components';


const Container = styled.div`
    border: 1px solid black;
    background: rgb(35, 42, 52) ;
    position: sticky;
    top: 0;
    padding: 0.2rem 1.5rem;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    div:first-child{
        flex: 3;
    }
    div:last-child{
        text-align: right;
        flex: 2;
    }
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
                    <NavLink name="pexel" />
                    <SearchBar style={{ padding: "14px 17px", }} />
                </IconSearchContatiner>
                <div>
                    <NavLink name="Explore" />
                    <NavLink name="License" />
                    <NavLink name="upload" />
                </div>
            </Container>
        </>
    );
}
