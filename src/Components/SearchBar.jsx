import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    width: max-content;
    position: relative;
    margin: auto;
    width: 100%;
`

const Input = styled.input`
    border: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 17.5px;
    line-height: 22px;
    font-size: 17px;
    font-weight: 300;
    background: rgba(255,255,255,0.95);
    color: #1a1a1a;
    border-radius: 5px;

    &:focus{
        background-color: white;
        outline: none;
    }
`

const Img = styled.img`
    width: 30px;
    position: absolute;
    right: 10px;
`


export default function SearchBar({ handleSearchChange, value, search, style }) {
    return (
        <Container>
            <Input style={style} onChange={handleSearchChange} value={value} placeholder="Search for free photos" />
            <Img src={"https://static.thenounproject.com/png/875358-200.png"} alt="searchIcon" onClick={search} />
        </Container>
    );
}
