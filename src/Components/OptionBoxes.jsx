import React from "react";
import styled from "styled-components"

const Container = styled.div`
display: inline-block;
 margin: 5px`
const SubContainer = styled.div`display: flex;
padding: 8px;
border: 1px solid rgb(128,128,128,0.4);
width: max-content;
align-items: center;
box-shadow: 0px 3px 0px 0px rgba(128,128,128, .3);
justify-content: space-evenly;
`


const NameSection = styled.div`padding: 5;
margin: 5px;
color: rgb(47, 129, 250);
font-weight: bold;
`
const CountStyling = styled.div`
color: grey; font-weight: bold`
const ImgSection = styled.img`
 width: 30;`

export default function OptionBoxes(props) {
    return (
        <>
                <Container>
                    <SubContainer>
                        <div>
                            <ImgSection src={props.url}  alt="tabImg" />
                        </div>
                        <NameSection>
                            {props.name}
                        </NameSection>
                        <CountStyling>
                            {`.${props.count}`}
                        </CountStyling>
                    </SubContainer>
                </Container>
        </>
    );
}