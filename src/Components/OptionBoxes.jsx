import React from "react";
import styled from "styled-components"

const Container = styled.div`
display: inline-block;
 margin: 5`

const SubContainer = styled.div`display: flex;
padding: 8px,
border: 1px solid grey;
width: max-content;
alignItems: center;
boxShadow: 0px 3px 0px 0px rgba(128,128,128, .3);
justify-content: space-between;`

const NameSection = styled.div`padding: 5;
marginLeft: 5;
color: rgb(47, 129, 250);
fontWeight: bold;
`
const CountStyling = styled.div`
color: grey; fontWeight: bold`

const ImgSection = styled.img`
 width: 30;`

export default function OptionBoxes(props) {
    return (
        <>
            <div>
                <Container>
                    <SubContainer>
                        <div>
                            <ImgSection src={props.url}  alt="tabImg" />
                        </div>
                        <NameSection>
                            {props.name}
                        </NameSection>
                        <CountStyling>
                            {props.count}
                        </CountStyling>
                    </SubContainer>
                </Container>
            </div>
        </>
    );
}
