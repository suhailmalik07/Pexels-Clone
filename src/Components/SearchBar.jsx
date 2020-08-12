import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border: 1px solid black;
    width: max-content;
    position: relative;
    margin: auto;
    width: 100%;
`

const Input = styled.input`
    height: 30px;
    border: 0px;
    width: 100%;
    box-sizing: border-box;
`

const Img = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
`


export default function SearchBar(props) {
    return (
        <Container>
            <Input onChange={props.handleSearchChange} value={props.value} />
            <Img src={"https://static.thenounproject.com/png/875358-200.png"} alt="searchIcon" onClick={props.search} />
        </Container>
    );
}
