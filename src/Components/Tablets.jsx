import React from "react";
import styled from 'styled-components';
import { AppContext } from '../Context/AppContextProvider';


const Container = styled.div`
    display: flex;
    margin: 1rem 2rem;
`

const TabletWrapper = styled.div`
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 30px;
    background: white;
    box-shadow: 1px 1px 10px 5px #eee;
    cursor: pointer;

    &:hover{
        background-color: #f1f1f1; 
    }
    p{
        padding: 0 0.5rem;
        margin: 0;
    }
`

const Tablet = ({ name, onClick }) => (
    <TabletWrapper onClick={onClick}>
        <p>{name}</p>
    </TabletWrapper>
)

export default function Tablets({ suggestions }) {
    return (
        <Container>
            <AppContext.Consumer>
                {({ handleSearch }) => (
                    suggestions.map(item => (
                        <Tablet name={item.word} onClick={() => handleSearch(item.word)} />
                    ))
                )}
            </AppContext.Consumer>
        </Container>
    );
}
