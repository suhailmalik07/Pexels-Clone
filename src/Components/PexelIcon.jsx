import React from "react";
import styled from 'styled-components';

const Img = styled.img`
    border-radius: 50%;
`

export default function PexelIcon(props) {
    return (

        <Img
            // onClick={"https://www.pexels.com/"} ///givehomelink
            href="https://www.pexels.com"
            src="http://via.placeholder.com/50"
            alt="pexelIcon"
        />
    );
}
