import React from "react";
import styled from 'styled-components';

const A = styled.a`
    font-size: 17px;
    text-decoration-line: "none";
    color: white;
    margin:  1rem;
    cursor: pointer;
`

export default function NavLink({ name, link, style }) {
    return (
        <A href={link} style={style}>
            {name}
        </A>
    );
}
