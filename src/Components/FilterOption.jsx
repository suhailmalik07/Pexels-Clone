import React from "react";
import styled from "styled-components"
import { AppContext } from "../Context/AppContextProvider"

const Container = styled.div`
    display: inline-block;
    margin: 5px`
    const SubContainer = styled.div`display: flex;
    padding: 8px;
    border: 1px solid rgb(128,128,128,0.4);
    min-width: 150px;
    align-items: center;
    box-shadow: 0px 3px 0px 0px rgba(128,128,128, .3);
    justify-content: space-evenly;
    border-radius:25px;`


const NameSection = styled.div`
    padding: 5;
    margin: 5px;
    color: rgb(128, 128, 128);
    font-weight: bold;`

const ImgSection = styled.img`
    width: 30;`

export default function FilterOption(props) {
    return (
        <>
            <AppContext.Consumer>
                {({ handleFilter }) => {
                    return <Container onClick={(e) => { handleFilter(props.name) }}>
                        <SubContainer>
                            <div>
                                <ImgSection src={props.url} alt="tabImg" />
                            </div>
                            <NameSection>
                                {props.name}
                            </NameSection>
                        </SubContainer>
                    </Container>
                }}
            </AppContext.Consumer>
        </>
    );
}