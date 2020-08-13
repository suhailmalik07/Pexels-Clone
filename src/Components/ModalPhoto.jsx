import React from 'react';
import styled from 'styled-components';


const ModalWrapper = styled.div`
    height: 100vh;
    width: 100vh;
    position: fixed;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    background: white;
    text-align: center;
    width: 80vh;
    height: 80vh;
    margin: auto;
    border-radius: 5px;
`

export default function Modal({ show, src }) {
    if (!show) {
        return null
    }
    return (
        <ModalWrapper>
            <Card>

            </Card>
        </ModalWrapper>
    )
}