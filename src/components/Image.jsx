import React from 'react';
import styled from 'styled-components';

const Img = styled.img`

`

export default function Image({ src, alt }) {
    return <Img src={src} alt={alt || "nature.png"} />
} 