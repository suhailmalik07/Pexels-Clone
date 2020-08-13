import React from "react";
import styled from 'styled-components';

const A = styled.a`
    font-size: 17px;
    text-decoration-line: "none";
    color: white;
    margin:  1rem;
    cursor: pointer;
`

export default function NavLink({ name, link, style, onClick }) {
    return (
        <A onClick={onClick} style={style}>
            {name}
        </A>
    );
}
