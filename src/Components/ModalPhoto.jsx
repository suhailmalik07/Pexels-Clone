import React from 'react';
import styled from 'styled-components';


const ModalWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    transition: 1s ease-out;
`

const Card = styled.div`
    background: white;
    width: 90%;
    height: 90%;
    margin: auto;
    border-radius: 5px;
    padding: 1rem;
    overflow-y: auto;
`

const ImgWrapper = styled.div`
    text-align: center;
`

const Panel = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    
    button{
        background-color: red;
        color: white;
        border: 0;
        padding: 0.5rem 1rem;
        border-radius: 5px;
    }
`

const Author = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin: 0;

    &:before{
        content: "Author: ";
        color: #555;
    }
`

export default function Modal({ show, item, close }) {
    if (!show) {
        return null
    }

    const { photographer, src: { large } } = item
    return (
        <ModalWrapper>
            <Card>
                <Panel>
                    <Author>
                        {photographer}
                    </Author>
                    <button onClick={close}>close</button>
                </Panel>
                <ImgWrapper style={{ textAlign: "center" }}>
                    <img src={large} alt="nature.png" />
                </ImgWrapper>
            </Card>
        </ModalWrapper>
    )
}