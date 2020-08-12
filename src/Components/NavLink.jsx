import React from "react";
import styled from 'styled-components';

const A = styled.a`
    font-size: 20px;
    text-decoration-line: "none";
    color: white;
    margin:  1rem;
`

export default function NavLink({ name, link }) {
    return (
        <A href={link}>
            {name}
        </A>
    );
}
