import React from 'react';
import styled from 'styled-components';

const Img = styled.img`

`

export default function Image({ src, alt, onClick }) {
    return <Img src={src} onClick={onClick} alt={alt || "nature.png"} />
} 